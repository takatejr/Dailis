import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredients } from '../ingredients/ingredients.entity';

@Entity()
export class DailyLists {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('json')
  ingredients: Ingredients;
}
