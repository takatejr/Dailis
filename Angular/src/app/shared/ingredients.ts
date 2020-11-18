export type alterTitle ={
  language: string,
  title: string
}
export interface Ingredients {
  titleOfProduct: string;
  bought: boolean;
  quantity: number;
  unit: string;
  from?: string;
  alterTitle?: alterTitle[] | null
  }
