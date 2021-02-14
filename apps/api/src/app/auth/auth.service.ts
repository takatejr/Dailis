import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    generateToken = (user) => {
        const payload = { iss: "Dailis", sub: user.access };
        return this.jwtService.sign(payload, {
            algorithm: 'HS512',
            secret: process.env.SECRET_JWT_KEY,
        });
    };

    verifyToken = (token) => {
        if (!token) return { message: "You don't have token to authorize." };
        return this.jwtService.verify(token, {
            algorithms: ['HS512'],
            secret: process.env.SECRET_JWT_KEY,
        });
    };

    hashPassword(password: string): Observable<string> {
        const salt = bcrypt.genSalt(10);
        return from<string>(bcrypt.hash(password, salt))
    }

    comparePasswords(newPassword: string, passwortHash: string): Observable<any> {
        return from(bcrypt.compare(newPassword, passwortHash));
    }

    validateUser(name: string, pass: string): Observable<any> {
        return this.usersService.findOne(name).pipe(
            switchMap((user: User) => this.comparePasswords(pass, user.password).pipe(
                map((match: boolean) => {
                    if (match) {
                        const { password, ...result } = user;
                        return result;
                    } else {
                        throw Error;
                    }
                })
            ))
        )

    }

    login(body: User): Observable<unknown> {
        return this.validateUser(body.login, body.password).pipe(
            map((user: User) => {
                if (user) {
                    return this.generateToken(user)
                } else {
                    return 'Wrong Credentials';
                }
            })
        )
    }
}