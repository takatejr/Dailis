import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  repo = getRepository(User);

  findAll(): Promise<User[]> {
    return this.repo.find();
  }

  findOne(nameOrID: string | number): Promise<User | undefined> {
    return this.repo.findOne(nameOrID);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  async create(user: User): Promise<any> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    await this.repo.save({
      name: user.name,
      password: hashedPassword,
    });
    return true;
  }
}