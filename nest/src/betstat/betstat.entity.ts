import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Betstat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  ID_dailyLists: number;

  @Column('varchar')
  recipes: string;
}
