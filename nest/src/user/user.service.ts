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

  findOne(name: string): Observable<any> {
    return from(this.repo.find({name}));
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  async create(user: User): Promise<any> {
    const { password, ...result} = user;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    await this.repo.save({...result, password: hashedPassword});
    return true
  }

  findByMail(email: string): Observable<User> {
    return from(this.repo.findOne(email));
}
}