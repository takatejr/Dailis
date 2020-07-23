import { Component } from '@angular/core';
import {Recipes} from "../../shared/recipes";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {

  recipes: Recipes[] = [
    { title: 'barszczyk',
      description: 'haraszo',
      ingredients: [
        {
      titleOfProduct: 'buraki',
      bought: true,
      quantity: 15,
      unit: 'szt',
        },
      ]
    }
  ];
}
