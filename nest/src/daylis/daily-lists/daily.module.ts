import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyListsService } from './daily.service';
import { DailyListsController } from './daily.controller';
import { DailyLists } from './daily.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DailyLists])],
  providers: [DailyListsService],
  controllers: [DailyListsController],
  exports: [TypeOrmModule]
})
export class DailyListsModule {}