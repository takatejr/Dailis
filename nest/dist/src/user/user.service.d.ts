import { Observable } from 'rxjs';
import { User } from './user.entity';
export declare class UsersService {
    repo: import("typeorm").Repository<User>;
    findAll(): Promise<User[]>;
    findOne(name: string): Observable<any>;
    remove(id: string): Promise<void>;
    create(user: User): Promise<any>;
    findByMail(email: string): Observable<User>;
}
