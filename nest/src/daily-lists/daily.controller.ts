import { Body, Controller, Get, Post } from '@nestjs/common';
import { DailyLists } from './daily.entity';
import { DailyListsService } from './daily.service';

@Controller('daily-lists')
export class DailyListsController {
  constructor(private readonly dailyListsService: DailyListsService) { }

  @Get()
  async getAllUsers(): Promise<DailyLists[]> {
    return await this.dailyListsService.findAll();
  }

  @Post()
  async create(@Body() dailyLists: DailyLists) {
    await this.dailyListsService.create(dailyLists);
  }

  @Post('/hehe')
  async update(@Body() dailyLists: DailyLists){
    await this.dailyListsService.update(dailyLists)
  }

}