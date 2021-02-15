import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BetstatService } from '../betstat/betstat.service';

@Injectable()
export class BetstatCronService {

    constructor(private betstatService: BetstatService){}

    @Cron(CronExpression.EVERY_DAY_AT_1AM)
    handleCron() {
        this.betstatService.scrapeProduct()
      }
}
