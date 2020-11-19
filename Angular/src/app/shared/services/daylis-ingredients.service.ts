import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Ingredients} from "../ingredients";

@Injectable({
  providedIn: 'root'
})
export class DaylisIngredientsService {
  private value: any;

  // private ingredients = new BehaviorSubject(this.value);

  // ingredients$ = this.ingredients.asObservable();

  // showDetailsOfDaylis(ingredients: Ingredients) {
  //   this.ingredients.next(ingredients);
  // }

  constructor() { }
}
