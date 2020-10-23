import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { Observable } from 'rxjs';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(name: string, pass: string): Promise<any>;
    comparePasswords(newPassword: string, passwortHash: string): Observable<any>;
    login(user: any): Promise<any>;
    register(userData: User): Promise<User>;
}
