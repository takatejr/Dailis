import { Body, Controller, Get, Param, Post, Req, Request } from '@nestjs/common';
import { User } from '../model/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

        constructor(private readonly usersService: UsersService) {}
      
        @Get(':id/gimme')
        getById(@Req() request: Request) {
          return "hehehe";
        }

        @Post()
        async createUser(@Body() user: User): Promise<User> {
            return this.usersService.createUser(user);
        }
        
        @Post(':id/delete')
        async delete(@Param() args) {
            return `${args.id} deleting`
        }
}
