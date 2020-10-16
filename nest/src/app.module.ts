import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import "reflect-metadata";
import { databaseProviders } from './db.provider';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersEntity } from './users/users.entity';

@Module({
  imports: [UsersService, UsersController, UsersEntity],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
  exports: [...databaseProviders]
})
export class AppModule { }
