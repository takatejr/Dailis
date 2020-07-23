import {Ingredients} from "./ingredients";

export interface Recipes {
  title: string;
  description: string;
  ingredients?: Array<Ingredients>;
}
