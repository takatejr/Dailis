import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { forkJoin, from, Observable } from 'rxjs';
import { getRepository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';

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

  findByMail(email: string): Observable<User> {
    return from(this.repo.findOne({ email }));
  }

  findByLogin(login: string): Observable<User> {
    return from(this.repo.findOne({ login }));
  }

  create({ password, email, login }) {
    return this.findByLogin(login).pipe(
      switchMap((user: User) => this.findByMail(email).pipe(
        map(mail => {
          if (mail) {
            return { message: 'Register successful' }
          } else {
            return { message: 'This email already exists' }
          }
        })
      ))
    )
  }

          // if (user) {
    //   const salt = await bcrypt.genSalt(10);
    //   const hashedPassword = await bcrypt.hash(password, salt);
    //   this.repo.save({ ...result, email: email, password: hashedPassword, access: 2 });
    //   return { message: 'Register successful' }
    // } else {
    //   return { message: 'This email already exists' }
    // }