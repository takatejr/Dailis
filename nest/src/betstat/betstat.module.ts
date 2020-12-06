import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BetstatService } from './betstat.service';
import { BetstatController } from './betstat.controller';
import { Betstat } from './betstat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Betstat])],
  providers: [BetstatService],
  controllers: [BetstatController],
  exports: [TypeOrmModule]
})
export class BetstatModule {}