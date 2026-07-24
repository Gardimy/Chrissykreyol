import {
  Injectable,
  ConflictException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Agent } from './entities/agent.entity';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

import { generateAgentId } from '../common/utils/generate-agent-id';
import { generatePromoCode } from '../common/utils/generate-promo-code';

import { EmailService } from '../email/email.service';

@Injectable()
export class AgentsService {
  constructor(
    @InjectRepository(Agent)
    private readonly agentRepository: Repository<Agent>,

    private readonly emailService: EmailService,
  ) {}

  async create(
    createAgentDto: CreateAgentDto,
  ): Promise<Agent> {
    try {
      const emailExists =
        await this.agentRepository.findOne({
          where: {
            email: createAgentDto.email,
          },
        });

      if (emailExists) {
        throw new ConflictException(
          'Cet email est déjà utilisé.',
        );
      }

      const nifExists =
        await this.agentRepository.findOne({
          where: {
            nifCin: createAgentDto.nifCin,
          },
        });

      if (nifExists) {
        throw new ConflictException(
          'Ce NIF/CIN est déjà utilisé.',
        );
      }

      const agentId = generateAgentId(
        createAgentDto.nom,
        createAgentDto.prenom,
      );

      const promoCode = generatePromoCode();

      const agent = this.agentRepository.create({
        ...createAgentDto,
        agentId,
        promoCode,
      });

      const savedAgent =
        await this.agentRepository.save(agent);

      await this.emailService.sendAgentNotification(
        savedAgent,
      );

      return savedAgent;
    } catch (error) {
      if (
        error instanceof ConflictException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      throw new InternalServerErrorException(
        "Une erreur est survenue lors de la création de l'agent.",
      );
    }
  }

  async findAll(): Promise<Agent[]> {
    return await this.agentRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number): Promise<Agent> {
    const agent =
      await this.agentRepository.findOne({
        where: { id },
      });

    if (!agent) {
      throw new NotFoundException(
        `Agent ${id} introuvable.`,
      );
    }

    return agent;
  }

  async update(
    id: number,
    updateAgentDto: UpdateAgentDto,
  ): Promise<Agent> {
    const agent = await this.findOne(id);

    Object.assign(agent, updateAgentDto);

    return await this.agentRepository.save(agent);
  }

  async remove(
    id: number,
  ): Promise<{ message: string }> {
    const agent = await this.findOne(id);

    await this.agentRepository.remove(agent);

    return {
      message: 'Agent supprimé avec succès.',
    };
  }
}
