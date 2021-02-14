import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { combineLatest, from, merge, Observable, of } from 'rxjs';
import { getRepository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { map, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class UsersService {

  @InjectRepository(User)

  repo = getRepository(User);

  findAll(): Promise<User[]> {
    return this.repo.find();
  }

  findOne(login: string): Observable<User> {
    return from(this.repo.findOne({ login }))
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  findByEmail(email: string): Observable<any> {
    return from(this.repo.findOne({ email }));
  }

  findByLogin(login: string): Observable<any> {
    return from(this.repo.findOne({ login }));
  }

  register({ password, email, login }) {
    return combineLatest([this.findByEmail(email), this.findByLogin(login)])
      .pipe(
        map(async ([mail, log]) => {

          console.log(mail !== undefined, log !== undefined)
          if (mail !== undefined) {
            { return { message: 'This email already exists' } }
          }
          if (log !== undefined) {
            return { message: 'This login already exists' }
          }

          const hashedPassword = await this.hashPassword(password)
          this.repo.save({ login: login, email: email, password: hashedPassword, access: 2 });
          return { message: 'Register successful' }
        }),
      )
  }
}