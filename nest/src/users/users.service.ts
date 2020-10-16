import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm";
import { UsersEntity } from "./users.entity";
import { User } from '../model/user';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
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