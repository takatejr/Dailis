import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Observable, } from 'rxjs';
import { User } from 'src/user/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super(); // passportStrategy constructor running
    }

    validate(name: string, password: string): Observable<User> {
        const user = this.authService.validateUser(name, password)
        console.log(user)
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
