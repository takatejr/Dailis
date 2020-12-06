import { Body, Controller, Get, Post } from '@nestjs/common';
import { Betstat } from './betstat.entity';
import { BetstatService } from './betstat.service';

@Controller('api/betstat')
export class BetstatController {
  constructor(private readonly betstatService: BetstatService) { }

  @Get()
  getHello(): Promise<Betstat[]> {
    return this.betstatService.scrapeProduct();
  }

} 