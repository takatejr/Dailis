import { DailyLists } from './daily.entity';
export declare class DailyListsService {
    repo: import("typeorm").Repository<DailyLists>;
    findAll(): Promise<DailyLists[]>;
    findOne(id: string): Promise<DailyLists>;
    remove(id: string): Promise<void>;
    create(dailyLists: DailyLists): Promise<any>;
}
