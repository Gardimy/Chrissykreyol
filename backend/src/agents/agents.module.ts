import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AgentsService } from './agents.service';
import { AgentsController } from './agents.controller';

import { Agent } from './entities/agent.entity';

import { EmailModule } from '../email/email.module';


@Module({

  imports: [

    TypeOrmModule.forFeature([
      Agent,
    ]),

    EmailModule,

  ],


  controllers: [
    AgentsController,
  ],


  providers: [
    AgentsService,
  ],


  exports: [
    AgentsService,
  ],

})
export class AgentsModule {}
