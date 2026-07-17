import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AgentsModule } from './agents/agents.module';
import { BoardModule } from './board/board.module';
import { PromoModule } from './promo/promo.module';
import { BiographyModule } from './biography/biography.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

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

    AgentsModule,

    BoardModule,

    PromoModule,

    BiographyModule,

    AdminModule,
  ],
})
export class AppModule {}