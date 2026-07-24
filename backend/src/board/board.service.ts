import {
  Injectable,
  ConflictException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Board } from './entities/board.entity';

import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

import { EmailService } from '../email/email.service';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,

    private readonly emailService: EmailService,
  ) {}

  async create(
    createBoardDto: CreateBoardDto,
  ): Promise<Board> {
    try {
      const emailExist =
        await this.boardRepository.findOne({
          where: {
            email: createBoardDto.email,
          },
        });

      if (emailExist) {
        throw new ConflictException(
          'Cet email existe déjà dans le board.',
        );
      }

      const board =
        this.boardRepository.create(createBoardDto);

      const savedBoard =
        await this.boardRepository.save(board);

      await this.emailService.sendBoardNotification(
        savedBoard,
      );

      return savedBoard;
    } catch (error) {
      if (
        error instanceof ConflictException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      throw new InternalServerErrorException(
        "Une erreur est survenue lors de l'enregistrement du membre du board.",
      );
    }
  }

  async findAll(): Promise<Board[]> {
    return await this.boardRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number): Promise<Board> {
    const board =
      await this.boardRepository.findOne({
        where: {
          id,
        },
      });

    if (!board) {
      throw new NotFoundException(
        'Membre board introuvable.',
      );
    }

    return board;
  }

  async update(
    id: number,
    updateBoardDto: UpdateBoardDto,
  ): Promise<Board> {
    const board = await this.findOne(id);

    Object.assign(board, updateBoardDto);

    return await this.boardRepository.save(board);
  }

  async remove(id: number): Promise<Board> {
    const board = await this.findOne(id);

    return await this.boardRepository.remove(board);
  }
}
