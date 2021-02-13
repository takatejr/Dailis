import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { Recipes } from './recipes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipes])],
  providers: [RecipesService],
  controllers: [RecipesController],
  exports: [TypeOrmModule]
})
export class RecipesModule {}