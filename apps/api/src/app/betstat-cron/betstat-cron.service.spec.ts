import { Test, TestingModule } from '@nestjs/testing';
import { BetstatCronService } from './betstat-cron.service';

describe('BetstatCronService', () => {
  let service: BetstatCronService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BetstatCronService],
    }).compile();

    service = module.get<BetstatCronService>(BetstatCronService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
