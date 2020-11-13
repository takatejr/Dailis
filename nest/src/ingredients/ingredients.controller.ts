import { Body, Controller, Get, Post } from '@nestjs/common';
import { Ingredients } from './ingredients.entity';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) { }

  @Get()
  getAllIngredients(): Promise<Ingredients[]> {
    return this.ingredientsService.findAll();
  }

  @Post()
  async createIngredients(@Body() ingredients: Ingredients) {
    this.ingredientsService.create(ingredients);
  }

} 