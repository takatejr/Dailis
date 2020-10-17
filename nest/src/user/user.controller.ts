import { Body, Controller, Get, Post } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { User } from './user.entity';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  getHello(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() user: User) {
    await this.usersService.create(user);
  }

}