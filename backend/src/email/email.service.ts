import { Injectable } from '@nestjs/common';

import { MailerService } from '@nestjs-modules/mailer';



@Injectable()
export class EmailService {


constructor(
private readonly mailerService:MailerService
){}





async sendAgentNotification(agent:any){


await this.mailerService.sendMail({

to:"Chrissykreyolaffiliation@gmail.com",

subject:"Nouvelle inscription Agent Chrissy Kreyol",


html:`

<h2>Nouvo Agent</h2>

<p><b>Nom:</b> ${agent.nom}</p>

<p><b>Prenom:</b> ${agent.prenom}</p>

<p><b>Email:</b> ${agent.email}</p>

<p><b>Téléphone:</b> ${agent.telephone}</p>

<p><b>NIF/CIN:</b> ${agent.nifCin}</p>

<p><b>Agent ID:</b> ${agent.agentId}</p>

<p><b>Code Promo:</b> ${agent.promoCode}</p>


`

});


}





async sendBoardNotification(board:any){



await this.mailerService.sendMail({

to:"Chrissykreyolaffiliation@gmail.com",

subject:"Nouvelle demande Board Direction",


html:`

<h2>Nouvelle demande Board</h2>


<p><b>Nom:</b>${board.nom}</p>

<p><b>Prenom:</b>${board.prenom}</p>

<p><b>Email:</b>${board.email}</p>

<p><b>Téléphone:</b>${board.telephone}</p>

<p><b>Profession:</b>${board.profession}</p>


<h3>Motivation</h3>

<p>
${board.motivation}
</p>


`

});


}


}
