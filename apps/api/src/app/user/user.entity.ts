import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  login: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  dailyLists_ID: number;

  @Column('varchar')
  recipes: string;

  @Column('varchar')
  access: number
}
