import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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

  @Put('/:id')
  async update(@Body() dailyLists: DailyLists, @Param('id') id: number){
    console.log(id)
    await this.dailyListsService.update(dailyLists)
  }

  @Get('/lastid')
  async lastId(): Promise<number>{
    return await this.dailyListsService.findLastID()
  }
}