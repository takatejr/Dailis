import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  from?: string | null
}
