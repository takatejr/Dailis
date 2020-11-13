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

  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
  
  async create(user: User): Promise<User> {
    const { password, ...result} = user;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    console.log({...result, password: hashedPassword})
    return this.repo.save({...result, password: hashedPassword});
  }

  findByMail(name: string): Observable<User> {
    return from(this.repo.findOne({name}));
}
}