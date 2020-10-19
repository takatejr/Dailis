import {Ingredients} from "./ingredients";

export interface DailyLists {
  id: number;
  title: string;
  ingredients?: Array<Ingredients>;
}
