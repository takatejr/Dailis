import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { Ingredients } from './ingredients.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredients])],
  providers: [IngredientsService],
  controllers: [IngredientsController],
  exports: [TypeOrmModule]
})
export class IngredientsModule {}