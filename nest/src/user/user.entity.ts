import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('varchar')
  ID_dailyLists: number;

  @Column('varchar')
  recipes: string;
}
