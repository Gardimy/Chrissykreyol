import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';


@Entity('board')
export class Board {

  @PrimaryGeneratedColumn()
  id!: number;


  @Column({ length: 100 })
  nom!: string;


  @Column({ length: 100 })
  prenom!: string;


  @Column({ length: 20 })
  sexe!: string;


  @Index({ unique: true })
  @Column({ length: 150 })
  email!: string;


  @Column({ length: 20 })
  telephone!: string;


  @Column({ length: 100 })
  profession!: string;


  @Column({
    type: 'text',
  })
  motivation!: string;


  @CreateDateColumn()
  createdAt!: Date;


  @UpdateDateColumn()
  updatedAt!: Date;

}
