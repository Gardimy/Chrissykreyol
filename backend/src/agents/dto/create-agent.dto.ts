import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';


import {
  Sexe,
  StatutMatrimonial,
} from '../entities/agent.entity';



export class CreateAgentDto {


  @IsString()
  @IsNotEmpty()
  nom!: string;



  @IsString()
  @IsNotEmpty()
  prenom!: string;



  @IsEnum(Sexe)
  sexe!: Sexe;



  @IsEnum(StatutMatrimonial)
  statut!: StatutMatrimonial;



  @IsString()
  @IsNotEmpty()
  nifCin!: string;



  @IsEmail()
  email!: string;



  @IsString()
  @IsNotEmpty()
  telephone!: string;

}
