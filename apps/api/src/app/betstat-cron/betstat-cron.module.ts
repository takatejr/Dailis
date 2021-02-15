import { Module } from '@nestjs/common';
import { BetstatCronService } from './betstat-cron.service';
import { BetstatService } from '../betstat/betstat.service';

@Module({
  providers: [BetstatCronService, BetstatService]
})
export class BetstatCronModule {}
