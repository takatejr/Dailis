import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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
    console.log(dailyLists)
    await this.dailyListsService.create(dailyLists);
  }

  @Put()
  async update(@Body() dailyLists: DailyLists){
    await this.dailyListsService.update(dailyLists)
  }

  @Delete()
  async delete(@Body() id: number){
    await this.dailyListsService.remove(id)
  }

  @Get('/lastid')
  async lastId(): Promise<number>{
    return await this.dailyListsService.findLastID()
  }
}