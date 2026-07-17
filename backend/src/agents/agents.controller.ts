import { Controller, Post, Body } from '@nestjs/common';
import { AgentsService } from './agents.service';


@Controller('agents')
export class AgentsController {


    constructor(
        private readonly agentsService: AgentsService
    ){}



    @Post()
    create(@Body() data:any){

        return this.agentsService.create(data);

    }


}
