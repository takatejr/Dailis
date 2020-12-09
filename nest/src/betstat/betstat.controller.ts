import { Body, Controller, Get, Post } from '@nestjs/common';
import { BetstatService } from './betstat.service';

@Controller('api/betstat')
export class BetstatController {
  constructor(private readonly betstatService: BetstatService) { }

  @Get('getmatches')
    async getMatches() {
      if (this.betstatService.matches.length == 0) {
      return this.betstatService.scrapeProduct()
      } else {
        return this.betstatService.matches
      }
    }
} 
