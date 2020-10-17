import { Recipes } from './recipes';

export interface User {
  id: number;
  name: string;
  description: string;
  ID_dailyLists: number[];
  recipes?: Array<Recipes>;
}
