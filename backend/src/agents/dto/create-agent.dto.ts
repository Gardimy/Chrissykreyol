import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export enum Sexe {
  HOMME = 'Homme',
  FEMME = 'Femme',
}

export enum Statut {
  CELIBATAIRE = 'Célibataire',
  MARIE = 'Marié(e)',
  DIVORCE = 'Divorcé(e)',
  VEUF = 'Veuf(ve)',
}

export class CreateAgentDto {
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  prenom: string;

  @IsEnum(Sexe)
  sexe: Sexe;

  @IsEnum(Statut)
  statut: Statut;

  @IsString()
  @Length(8, 20)
  nifCin: string;

  @IsEmail()
  email: string;

  @IsString()
  telephone: string;
}
