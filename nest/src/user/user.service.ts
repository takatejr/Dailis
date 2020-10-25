import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { getRepository} from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

  @InjectRepository(User)

  repo = getRepository(User);

  findAll(): Promise<User[]> {
    return this.repo.find();
  }

  findOne(name: string): Observable<User> {
  return from(this.repo.findOne({name}))
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  create(user: User): Observable<User> {
    const { password, ...result} = user;
    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(user.password, salt);

    return from(this.repo.save({...result, password: hashedPassword}));
  }

  findByMail(name: string): Observable<User> {
    return from(this.repo.findOne({name}));
}
}