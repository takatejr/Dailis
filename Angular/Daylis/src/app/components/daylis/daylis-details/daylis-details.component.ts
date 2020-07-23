import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DaylisIngredientsService} from "../../../shared/services/daylis-ingredients.service";

@Component({
  selector: 'app-daylis-details',
  templateUrl: './daylis-details.component.html',
  styleUrls: ['./daylis-details.component.scss']
})
export class DaylisDetailsComponent implements OnInit {

  ingredients: any = [];
  EDIT_DETAILS: number[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private daylisIngredients: DaylisIngredientsService )
  {
    daylisIngredients.ingredients$.subscribe(ingredients => this.ingredients = ingredients);
  }

  showEditDetails(e){
    if (!this.EDIT_DETAILS.includes(e)) {
      this.EDIT_DETAILS.push(e);
    } else {
      let n = this.EDIT_DETAILS.indexOf(e);
      this.EDIT_DETAILS.splice(n, 1);
    }
  }

  ngOnInit(): void {
  }

  editedIngredient(message) {
    let index = message[0];
    this.ingredients[index].titleOfProduct = message[1];
    this.ingredients[index].quantity = message[2];
    this.ingredients[index].unit = message[3];
  }

  addIngredient() {
    this.ingredients.push({titleOfProduct: "", bought: false, quantity: null, unit: ""})
  }
}
