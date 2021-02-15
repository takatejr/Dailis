import { Controller, Post, Request, Res } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { UsersService } from './user/user.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
) { }

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

  
  @Post('users/status')
  async status(@Request() request) {
    const { token, user, access } = request.cookies
    const verified = this.authService.verifyToken(token);
    if (verified) {
      return { login: user, access: access, logged_in: true}
    } else {
      return { message: 'Something wrong'}
    }
  }
}
