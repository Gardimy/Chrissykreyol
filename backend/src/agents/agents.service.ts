import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Agent } from './entities/agent.entity';


@Injectable()
export class AgentsService {


constructor(

@InjectRepository(Agent)

private agentRepository: Repository<Agent>

){}



async create(data:any){


const agent = new Agent();


agent.nom = data.nom;

agent.prenom = data.prenom;

agent.sexe = data.sexe;

agent.statusMatrimonial = data.statusMatrimonial;

agent.nifCin = data.nifCin;

agent.email = data.email;

agent.telephone = data.telephone;

agent.niveauEtude = data.niveauEtude;



agent.agentId = this.generateAgentId(
data.nom,
data.prenom
);



agent.codePromo = this.generatePromoCode(
data.prenom
);



return await this.agentRepository.save(agent);


}




generateAgentId(
nom:string,
prenom:string
){


const n = nom.substring(0,3).toUpperCase();

const p = prenom.substring(0,3).toUpperCase();


const random =
Math.floor(1000 + Math.random()*9000);


return `${n}-${p}-${random}`;


}





generatePromoCode(prenom:string){


const random =
Math.floor(100 + Math.random()*900);


return `CHRISSYKREYOL-${prenom.toUpperCase()}${random}`;


}



}
