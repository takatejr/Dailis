import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DailyLists {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('varchar')
  ingredients: number;
}
