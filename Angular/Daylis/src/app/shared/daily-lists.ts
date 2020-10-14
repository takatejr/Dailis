import {Ingredients} from "./ingredients";

export interface DailyLists {
  id: number;
  titleOfList: string;
  ingredients?: Set<Ingredients>;
}
