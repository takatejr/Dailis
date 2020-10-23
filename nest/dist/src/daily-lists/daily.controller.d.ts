import { DailyLists } from './daily.entity';
import { DailyListsService } from './daily.service';
export declare class DailyListsController {
    private readonly usersService;
    constructor(usersService: DailyListsService);
    getHello(): Promise<DailyLists[]>;
    create(dailyLists: DailyLists): Promise<void>;
}
