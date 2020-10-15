import { Injectable, Inject } from '@nestjs/common';
import { Repository } from "typeorm";
import { UsersEntity } from "./users.entity";
import { User } from '../model/user';

@Injectable()
export class UsersService {
    constructor(
        @Inject(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>
    ) { }

    async getAll(): Promise<UsersEntity[]> {
        return this.usersRepository.find();
    }

    async getOne(id: number): Promise<UsersEntity> {
        return this.usersRepository.findOne(id);
    }

    async createUser(user: User): Promise<User> {
        return await this.usersRepository.save(user);
    }
}