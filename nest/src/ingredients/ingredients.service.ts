import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { getRepository } from 'typeorm';
import { Ingredients } from './ingredients.entity';


@Injectable()
export class IngredientsService {

  @InjectRepository(Ingredients)

  repo = getRepository(Ingredients);

  findAll(): Promise<Ingredients[]> {
    return this.repo.find();
  }

  findOne(name: string): Observable<Ingredients> {
    return from(this.repo.findOne(name))
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }
  async create(ingredients: Ingredients): Promise<Ingredients> {
    return this.repo.save(ingredients);
  }
}