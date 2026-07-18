import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Agent } from './entities/agent.entity';

import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

import { generateAgentId } from '../common/utils/generate-agent-id';
import { generatePromoCode } from '../common/utils/generate-promo-code';


@Injectable()
export class AgentsService {

  constructor(
    @InjectRepository(Agent)
    private readonly agentRepository: Repository<Agent>,
  ) {}


  async create(
    createAgentDto: CreateAgentDto,
  ): Promise<Agent> {


    const agent = this.agentRepository.create({

      ...createAgentDto,

      agentId: generateAgentId(
        createAgentDto.nom,
        createAgentDto.prenom,
      ),

      promoCode: generatePromoCode(),

    });


    return this.agentRepository.save(agent);

  }



  async findAll(): Promise<Agent[]> {

    return this.agentRepository.find();

  }



  async findOne(id:number): Promise<Agent | null>{

    return this.agentRepository.findOne({
      where:{
        id
      }
    });

  }



  async update(
    id:number,
    updateAgentDto: UpdateAgentDto,
  ){

    await this.agentRepository.update(
      id,
      updateAgentDto,
    );


    return this.findOne(id);

  }



  async remove(id:number){

    await this.agentRepository.delete(id);

    return {
      message:"Agent deleted successfully"
    };

  }

}
