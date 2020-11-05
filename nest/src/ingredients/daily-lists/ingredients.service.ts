import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository} from 'typeorm';
import { Ingredients } from './ingredients.entity';

@Injectable()
export class IngredientsService {

  @InjectRepository(Ingredients)

  repo = getRepository(Ingredients);

  findAll(): Promise<Ingredients[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<Ingredients> {
    return this.repo.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  async create(ingredients: Ingredients): Promise<any> {
    await this.repo.save(ingredients);
  }
}