import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

type alterTitle ={
  language: string,
  title: string
}

@Entity()
export class Ingredients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('boolean')
  bought: boolean;

  @Column('varchar')
  quantity: number;

  @Column('varchar')
  unit: string;

  @Column('varchar')
  from: string | null;

  @Column('varchar')
  alterTitle: alterTitle[] | null
}
