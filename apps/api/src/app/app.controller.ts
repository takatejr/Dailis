import { Controller, Get, Post, Request, Res } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { UsersService } from './user/user.service';
import { Observable, combineLatest } from 'rxjs';
import { BetstatService } from './betstat/betstat.service';
import { map, tap } from 'rxjs/operators';

@Controller()
export class AppController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
    private readonly betstatService: BetstatService) { }

  @Post('users/login')
  async login(@Request() req, @Res({ passthrough: true }) response) {
    return combineLatest([this.authService.login(req.body), this.authService.validateUser(req.body.login, req.body.password)])
      .pipe(
        map(([token, result]) => {
          response.cookie('token', token);
          response.cookie('user', result.login);
          response.cookie('access', result.access);
        }),
      )
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
}
