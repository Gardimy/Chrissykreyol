import {
 IsString,
 IsEmail,
 IsNotEmpty
} from 'class-validator';



export class CreateBoardDto {


 @IsString()
 @IsNotEmpty()
 nom!:string;



 @IsString()
 @IsNotEmpty()
 prenom!:string;



 @IsString()
 @IsNotEmpty()
 sexe!:string;



 @IsEmail()
 email!:string;



 @IsString()
 @IsNotEmpty()
 telephone!:string;



 @IsString()
 @IsNotEmpty()
 profession!:string;



 @IsString()
 @IsNotEmpty()
 motivation!:string;


}
