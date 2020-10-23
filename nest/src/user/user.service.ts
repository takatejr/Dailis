import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { getRepository} from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  @InjectRepository(User)

  repo = getRepository(User);

  findAll(): Promise<User[]> {
    return this.repo.find();
  }

  findOne(name: string): Observable<any> {
    return from(this.repo.find({name}));
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  async create(user: User): Promise<any> {
    await this.repo.save(user);
  }

  findByMail(email: string): Observable<User> {
    return from(this.repo.findOne(email));
}
}