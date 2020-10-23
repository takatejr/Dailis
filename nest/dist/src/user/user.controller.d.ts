import { User } from './user.entity';
import { UsersService } from './user.service';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getHello(): Promise<User[]>;
    create(user: User): Promise<void>;
}
