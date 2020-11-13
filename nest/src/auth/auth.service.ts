import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';
import { from, Observable } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    validateUser(name: string, pass: string): Observable<any> {
        return this.usersService.findOne(name).pipe(
            switchMap((user: User) => this.comparePasswords(pass, user.password).pipe(
                map((match: boolean) => {
                    console.log(match)
                    if(match) {
                        const {password, ...result} = user;
                        return result;
                    } else {
                        throw Error;
                    }
                })
            ))
        )

    }

    comparePasswords(newPassword: string, passwortHash: string): Observable<any> {
        return from(bcrypt.compare(newPassword, passwortHash));
    }

    // login(user: User){
    //     const payload = { username: user.name, password: user.password };

    //     return {
    //         access_token: this.jwtService.sign(payload),
    //     };
    // }

    login(body: User): Observable<any> {
        const payload = { name: body.name, password: body.password };
        return this.validateUser(body.name, body.password).pipe(
            switchMap((user: User) => {
                if(user) {
                    const access_token = this.jwtService.sign(payload);
                    console.log(access_token)
                    return access_token;
                } else {
                    return 'Wrong Credentials';
                }
            })
        )
    }

    register(userData: User): Observable<User> {
        const payload = { name: userData.name, password: userData.password };
        const access_token = this.jwtService.sign(payload)
        console.log(access_token)
        return from(this.usersService.create(userData))
    }
}
