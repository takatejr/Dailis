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

  findOne(id: string): Promise<DailyLists> {
    return this.repo.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  async create(dailyLists: DailyLists): Promise<any> {
    await this.repo.save(dailyLists);
  }
}