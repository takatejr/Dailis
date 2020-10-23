import { Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService, 
    private readonly userService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log(req.user)
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('userowie')
  getProfile(@Request() req){
    this.userService.findOne(req.body.name)
    return req.user;
  }

  @Post('auth/register')
  async register(@Request() req) {
    return this.authService.register(req.body)
  }

  // @UseGuards(LocalAuthGuard)
  @Get('hehe')
  async sercz(@Request() req){
    // console.log(req.user, req.body.name, req.body.password, req.body)
    const authuser =  this.authService.validateUser(req.body.name, req.body.password)
    // console.log(authuser + "to jest konsol log z sercza")
  }
}
