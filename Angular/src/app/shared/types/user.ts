import { DailyLists } from './daily-lists';
import { Recipes } from './recipes';

export interface User {
  id: number;
  name: string;
  description: string;
  ID_dailyLists: Array<DailyLists>;
  recipes?: Recipes[];
}
