import { Body, Controller, Get, Post } from '@nestjs/common';
import { Ingredients } from './ingredients.entity';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) { }

  @Get()
  getHello(): Promise<Ingredients[]> {
    return this.ingredientsService.findAll();
  }

  @Post()
  async create(@Body() ingredients: Ingredients) {
    await this.ingredientsService.create(ingredients);
  }

}