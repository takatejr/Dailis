import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
        ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }

        return null
    }

    async login(user: any): Promise<any> {
        const payload = { name: user.name, sub: user.id};

        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async register(userData: User): Promise<User> {
        return await this.usersService.create(userData);
    }
}
