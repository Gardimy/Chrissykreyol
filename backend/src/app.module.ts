import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


import { AgentsModule } from './agents/agents.module';
import { BoardModule } from './board/board.module';
import { PromoModule } from './promo/promo.module';
import { BiographyModule } from './biography/biography.module';
import { AdminModule } from './admin/admin.module';
import { EmailModule } from './email/email.module';



@Module({
  imports: [

    // Configuration globale (.env)
    ConfigModule.forRoot({
      isGlobal: true,
    }),


    // Database PostgreSQL
    TypeOrmModule.forRoot({

      type: 'postgres',

      host: process.env.DATABASE_HOST,

      port: Number(process.env.DATABASE_PORT),

      username: process.env.DATABASE_USER,

      password: process.env.DATABASE_PASSWORD,

      database: process.env.DATABASE_NAME,


      autoLoadEntities: true,

      synchronize: false,

    }),


    // Application Modules
    AgentsModule,

    BoardModule,

    PromoModule,

    BiographyModule,

    AdminModule,

    EmailModule,

  ],
})
export class AppModule {}