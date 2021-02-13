import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('varchar')
  description: string;
}
