import { ApiProperty } from '@nestjs/swagger';


export class AgentResponseDto {


  @ApiProperty({
    example: 1,
  })
  id!: number;



  @ApiProperty({
    example: 'CHGA1234',
  })
  agentId!: string;



  @ApiProperty({
    example: 'CHRISSY-CK-456789',
  })
  promoCode!: string;



  @ApiProperty({
    example: 'Charles',
  })
  nom!: string;



  @ApiProperty({
    example: 'Gardimy',
  })
  prenom!: string;



  @ApiProperty({
    example: 'Homme',
  })
  sexe!: string;



  @ApiProperty({
    example: 'CELIBATAIRE',
  })
  statut!: string;



  @ApiProperty({
    example: '123456789',
  })
  nifCin!: string;



  @ApiProperty({
    example: 'gardimy@test.com',
  })
  email!: string;



  @ApiProperty({
    example: '50940000000',
  })
  telephone!: string;



  @ApiProperty()
  createdAt!: Date;



  @ApiProperty()
  updatedAt!: Date;


}