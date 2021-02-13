import { Body, Controller, Get, Post } from '@nestjs/common';
import { Recipes } from './recipes.entity';
import { RecipesService } from './recipes.service';

@Controller('Recipes')
export class RecipesController {
  constructor(private readonly usersService: RecipesService) { }

  @Get()
  getHello(): Promise<Recipes[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() recipes: Recipes) {
    await this.usersService.create(recipes);
  }

}