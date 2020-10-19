import { Body, Controller, Get, Post } from '@nestjs/common';
import { DailyLists } from './daily.entity';
import { DailyListsService } from './daily.service';

@Controller('daily-lists')
export class DailyListsController {
  constructor(private readonly usersService: DailyListsService) { }

  @Get()
  getHello(): Promise<DailyLists[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() dailyLists: DailyLists) {
    await this.usersService.create(dailyLists);
  }

}