import { Module } from '@nestjs/common';

import { MailerModule } from '@nestjs-modules/mailer';

import { EmailService } from './email.service';


@Module({

  imports: [

    MailerModule.forRoot({

      transport: {

        host: process.env.EMAIL_HOST,

        port: Number(process.env.EMAIL_PORT),

        secure: false,


        auth: {

          user: process.env.EMAIL_USER,

          pass: process.env.EMAIL_PASSWORD,

        },

      },

    }),

  ],


  providers: [

    EmailService,

  ],


  exports: [

    EmailService,

  ],

})
export class EmailModule {}
