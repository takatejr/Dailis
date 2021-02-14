import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  getHello(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('/register')
  async create(@Body() user: User) {
   return this.usersService.create(user);
  }
} 