import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @IsNotEmpty()
  nom: string;

  @IsString()
  @IsNotEmpty()
  prenom: string;

  @IsString()
  sexe: string;

  @IsEmail()
  email: string;

  @IsString()
  telephone: string;

  @IsString()
  profession: string;

  @IsString()
  motivation: string;
}
