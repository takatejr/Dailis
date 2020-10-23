import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository} from 'typeorm';
import { Recipes } from './recipes.entity';

@Injectable()
export class RecipesService {

  @InjectRepository(Recipes)

  repo = getRepository(Recipes);

  findAll(): Promise<Recipes[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<Recipes> {
    return this.repo.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  async create(recipes: Recipes): Promise<any> {
    await this.repo.save(recipes);
  }
}