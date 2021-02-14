import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { UsersService } from './user/user.service';
import { Observable } from 'rxjs';
import { BetstatService } from './betstat/betstat.service';

@Controller()
export class AppController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
    private readonly betstatService: BetstatService) { }

  @Post('auth/login')
  async login(@Request() req) {
    console.log(req.body)
    return this.authService.login(req.body);
  }

  @Get('userowie')
  getProfile(@Request() req) {
    this.userService.findOne(req.body.name)
    return req.user;
  }

  @Post('hehe')
  sercz(@Request() req): Observable<any> {
    console.log(req.body)
    const authuser = this.authService.validateUser(req.body.name, req.body.password)
    return authuser
  }

  @Post('hehex')
  mail(@Request() req) {
    this.userService.findByMail(req.body.email)
  }
}
