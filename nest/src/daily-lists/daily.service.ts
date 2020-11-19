import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository} from 'typeorm';
import { DailyLists } from './daily.entity';

@Injectable()
export class DailyListsService {

  @InjectRepository(DailyLists)

  repo = getRepository(DailyLists);

  findAll(): Promise<DailyLists[]> {
    return this.repo.find();
  }

  findOne(id: number): Promise<DailyLists> {
    return this.repo.findOne(id);
  }

  async findLastID(): Promise<number> {
    return await this.repo.find().then(e => e.length);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }

  async create(dailyLists: DailyLists): Promise<any> {
    await this.repo.save(dailyLists);
  }

  async update(dailyLists: DailyLists) {
    await this.repo.update(dailyLists, dailyLists)
  }
}