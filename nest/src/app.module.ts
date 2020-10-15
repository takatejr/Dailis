import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import "reflect-metadata";
import { databaseProviders } from './db.provider';
import { UsersController } from './users/users.controller';
import { RecipesController } from './recipes/recipes.controller';
import { IngredientsController } from './ingredients/ingredients.controller';
import { DailyListsController } from './daily-lists/daily-lists.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, RecipesController, IngredientsController, DailyListsController],
  providers: [AppService, ...databaseProviders],
  exports: [...databaseProviders]
})
export class AppModule { }
