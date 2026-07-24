import { Injectable } from '@nestjs/common';

import { MailerService } from '@nestjs-modules/mailer';


@Injectable()
export class EmailService {


  constructor(
    private readonly mailerService: MailerService,
  ) {}



  private readonly destinationEmail =
    'Chrissykreyolaffiliation@gmail.com';



  async sendAgentNotification(agent: any) {


    await this.mailerService.sendMail({

      to: this.destinationEmail,

      subject:
        'Nouvelle inscription Agent - Chrissy Kreyol',


      html: `

      <h2>Nouvelle demande Agent</h2>

      <p><strong>Nom:</strong> ${agent.nom}</p>

      <p><strong>Prénom:</strong> ${agent.prenom}</p>

      <p><strong>Email:</strong> ${agent.email}</p>

      <p><strong>Téléphone:</strong> ${agent.telephone}</p>

      <p><strong>NIF/CIN:</strong> ${agent.nifCin}</p>


      <hr>


      <h3>Informations générées</h3>


      <p>
      <strong>Agent ID:</strong>
      ${agent.agentId}
      </p>


      <p>
      <strong>Code Promo:</strong>
      ${agent.promoCode}
      </p>

      `,

    });

  }




  async sendBoardNotification(board: any) {


    await this.mailerService.sendMail({

      to: this.destinationEmail,


      subject:
        'Nouvelle demande Board Direction - Chrissy Kreyol',



      html: `


      <h2>Nouvelle candidature Board</h2>


      <p>
      <strong>Nom:</strong>
      ${board.nom}
      </p>


      <p>
      <strong>Prénom:</strong>
      ${board.prenom}
      </p>


      <p>
      <strong>Email:</strong>
      ${board.email}
      </p>


      <p>
      <strong>Téléphone:</strong>
      ${board.telephone}
      </p>


      <p>
      <strong>Profession:</strong>
      ${board.profession}
      </p>


      <p>
      <strong>Motivation:</strong>
      </p>


      <p>
      ${board.motivation}
      </p>


      `,

    });


  }



}
