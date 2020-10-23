import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';
import { from, Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
        ) { }

    async validateUser(name: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(name);
        console.log(name + " name z validateuser")
        console.log(pass + "   pass z validateuser")
        console.log(user.subscribe())

        // if (user && await bcrypt.compare(pass, user.password)) {
        //     const { password, ...result } = user;
        //     return result;
        // }

        // return null
    }
    
    comparePasswords(newPassword: string, passwortHash: string): Observable<any>{
        return from(bcrypt.compare(newPassword, passwortHash));
    }
    async login(user: any): Promise<any> {
    const payload = { username: user.username, password: user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
    }

    async register(userData: User): Promise<User> {
        const payload = { name: userData.name, password: userData.password};
        const access_token = this.jwtService.sign(payload)
        console.log(access_token)
        return await this.usersService.create(userData);

    }
}
