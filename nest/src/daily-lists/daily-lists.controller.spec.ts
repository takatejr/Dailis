import { Test, TestingModule } from '@nestjs/testing';
import { DailyListsController } from './daily-lists.controller';

describe('DailyListsController', () => {
  let controller: DailyListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyListsController],
    }).compile();

    controller = module.get<DailyListsController>(DailyListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
