import { AuthService } from './auth/auth.service';
import { UsersService } from './user/user.service';
export declare class AppController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
    login(req: any): Promise<any>;
    getProfile(req: any): any;
    register(req: any): Promise<import("./user/user.entity").User>;
    sercz(req: any): Promise<void>;
}
