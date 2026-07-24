import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';

import {
  SwaggerModule,
  DocumentBuilder,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin:"http://localhost:5173",
});

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Chrissy Kreyol API')
    .setDescription(
      'API de gestion des Agents, Board, Promotion et Administration',
    )
    .setVersion('1.0.0')
    .addTag('Agents')
    .addTag('Board')
    .addTag('Biography')
    .addTag('Promo')
    .addTag('Admin')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  console.log('✅ Backend running on http://localhost:3000');
  console.log('📘 Swagger disponible sur http://localhost:3000/api');
}

bootstrap();
