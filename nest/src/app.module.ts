import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';
import { RecipesModule } from './recipes/recipes.module';
import { DailyListsModule } from './daily-lists/daily.module';
import { Recipes } from './recipes/recipes.entity';
import { DailyLists } from './daily-lists/daily.entity';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './user/user.service';
import { Ingredients } from './ingredients/ingredients.entity';
import { IngredientsModule } from './ingredients/ingredients.module';
import { BetstatService } from './betstat/betstat.service';
import { BetstatController } from './betstat/betstat.controller';


@Module({
  imports: [    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: 'test',
    database: 'test',
    entities: [User, Recipes, DailyLists, Ingredients],
    synchronize: true,
  }), UsersModule, RecipesModule, DailyListsModule, AuthModule, IngredientsModule],
  controllers: [AppController, BetstatController],
  providers: [AppService, UsersService, BetstatService],
})
export class AppModule {}
