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

  @Post()
  async create(@Body() user: User) {
    this.usersService.create(user);
  }

  @Post('/register')
  async register(@Body() user: User) {
    this.usersService.create(user);
  }

} 