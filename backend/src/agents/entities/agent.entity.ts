import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Agent {


@PrimaryGeneratedColumn()
id!: number;


@Column()
agentId!: string;


@Column()
nom!: string;


@Column()
prenom!: string;


@Column()
sexe!: string;


@Column()
statusMatrimonial!: string;


@Column()
nifCin!: string;


@Column()
email!: string;


@Column()
telephone!: string;


@Column()
niveauEtude!: string;


@Column()
codePromo!: string;


}
