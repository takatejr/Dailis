import { Controller, Post, Req, Request, Res } from '@nestjs/common';
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
  login(@Req() req, @Res({ passthrough: true }) response) {
    const { login, password } = req.body

    return combineLatest([this.authService.login(req.body), this.authService.validateUser(login, password)])
      .pipe(
        map(([token, {login, access}]) => {
          response.cookie('token', token);
          response.cookie('user', login);
          response.cookie('access', access);
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
