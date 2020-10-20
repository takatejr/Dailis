import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';
import { DailyLists } from './daily-lists/daily.entity';
import { DailyListsModule } from './daily-lists/daily.module';
import { Recipes } from './recipes/recipes.entity';
import { RecipesModule } from './recipes/recipes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: 'test',
    database: 'test',
    entities: [User, DailyLists, Recipes],
    synchronize: true,
  }), UsersModule, DailyListsModule, RecipesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
