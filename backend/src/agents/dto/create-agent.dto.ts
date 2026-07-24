import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import {
  Sexe,
  StatutMatrimonial,
} from '../entities/agent.entity';

export class CreateAgentDto {

  @ApiProperty({
    example: 'Charles',
    description: "Nom de l'agent",
  })
  @IsString()
  @IsNotEmpty()
  nom!: string;

  @ApiProperty({
    example: 'Gardimy',
    description: "Prénom de l'agent",
  })
  @IsString()
  @IsNotEmpty()
  prenom!: string;

  @ApiProperty({
    enum: Sexe,
    example: Sexe.HOMME,
  })
  @IsEnum(Sexe)
  sexe!: Sexe;

  @ApiProperty({
    enum: StatutMatrimonial,
    example: StatutMatrimonial.CELIBATAIRE,
  })
  @IsEnum(StatutMatrimonial)
  statut!: StatutMatrimonial;

  @ApiProperty({
    example: '123456789',
  })
  @IsString()
  @IsNotEmpty()
  nifCin!: string;

  @ApiProperty({
    example: 'gardimy@test.com',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: '50940000000',
  })
  @IsString()
  @IsNotEmpty()
  telephone!: string;
}
