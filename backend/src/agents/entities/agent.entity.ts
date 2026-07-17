import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

export enum Sexe {
  HOMME = 'Homme',
  FEMME = 'Femme',
}

export enum StatutMatrimonial {
  CELIBATAIRE = 'Célibataire',
  MARIE = 'Marié(e)',
  DIVORCE = 'Divorcé(e)',
  VEUF = 'Veuf(ve)',
}

@Entity('agents')
export class Agent {

  @PrimaryGeneratedColumn()
  id!: number;


  @Index({ unique: true })
  @Column({ length: 20 })
  agentId!: string;


  @Index({ unique: true })
  @Column({ length: 30 })
  promoCode!: string;


  @Column({ length: 100 })
  nom!: string;


  @Column({ length: 100 })
  prenom!: string;


  @Column({
    type: 'enum',
    enum: Sexe,
  })
  sexe!: Sexe;


  @Column({
    type: 'enum',
    enum: StatutMatrimonial,
  })
  statut!: StatutMatrimonial;


  @Index({ unique: true })
  @Column({ length: 25 })
  nifCin!: string;


  @Index({ unique: true })
  @Column({ length: 150 })
  email!: string;


  @Column({ length: 20 })
  telephone!: string;


  @CreateDateColumn()
  createdAt!: Date;


  @UpdateDateColumn()
  updatedAt!: Date;

}
