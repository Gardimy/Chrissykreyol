import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@ApiTags('Agents')
@Controller('agents')
export class AgentsController {

  constructor(
    private readonly agentsService: AgentsService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Créer un nouvel agent',
  })
  @ApiResponse({
    status: 201,
    description: 'Agent créé avec succès.',
  })
  @ApiResponse({
    status: 409,
    description: 'Email ou NIF/CIN existe déjà.',
  })
  create(
    @Body() createAgentDto: CreateAgentDto,
  ) {
    return this.agentsService.create(createAgentDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Lister tous les agents',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste des agents.',
  })
  findAll() {
    return this.agentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Rechercher un agent par ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Agent trouvé.',
  })
  @ApiResponse({
    status: 404,
    description: 'Agent introuvable.',
  })
  findOne(
    @Param('id') id: string,
  ) {
    return this.agentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Modifier un agent',
  })
  @ApiResponse({
    status: 200,
    description: 'Agent modifié.',
  })
  @ApiResponse({
    status: 404,
    description: 'Agent introuvable.',
  })
  update(
    @Param('id') id: string,
    @Body() updateAgentDto: UpdateAgentDto,
  ) {
    return this.agentsService.update(+id, updateAgentDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Supprimer un agent',
  })
  @ApiResponse({
    status: 200,
    description: 'Agent supprimé.',
  })
  @ApiResponse({
    status: 404,
    description: 'Agent introuvable.',
  })
  remove(
    @Param('id') id: string,
  ) {
    return this.agentsService.remove(+id);
  }
}
