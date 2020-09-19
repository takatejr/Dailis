import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DaylisIngredientsService } from "../../../shared/services/daylis-ingredients.service";

@Component({
  selector: 'app-daylis-details',
  templateUrl: './daylis-details.component.html',
  styleUrls: ['./daylis-details.component.scss']
})
export class DaylisDetailsComponent implements AfterViewInit {

  ingredients: any = [];
  EDIT_DETAILS: number[] = [];
  indexForDeleteIngredient: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private daylisIngredients: DaylisIngredientsService) {
    daylisIngredients.ingredients$.subscribe(ingredients => this.ingredients = ingredients);
  }

  toggleEditDetails(e) {
    if (!this.EDIT_DETAILS.includes(e)) {
      this.EDIT_DETAILS.push(e);
    } else {
      const n = this.EDIT_DETAILS.indexOf(e);
      this.EDIT_DETAILS.splice(n, 1);
    }
  }

  editedIngredient(message) {
    let index = message[0];
    this.ingredients[index].titleOfProduct = message[1];
    this.ingredients[index].quantity = message[2];
    this.ingredients[index].unit = message[3];
    this.toggleEditDetails(index)
  }
  
  addIngredient() {
    this.ingredients.push({ titleOfProduct: "", bought: false, quantity: null, unit: "" })
  }

  deleteIngredients(i) {
    this.ingredients.splice(i, 1)
  }

  pressEnterToAccept(){
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
      div.addEventListener('keydown', this.editedIngredient)
    })
  }

  containers = document.querySelectorAll('.container');
  ngAfterViewInit() {
    const containers = document.querySelectorAll('.container');
    containers.forEach((container) => {
      container.addEventListener('touchstart', this.touchStart)
      container.addEventListener('touchmove', this.moveIngredient)
      container.addEventListener('touchend', this.endTouch)
      
      container.addEventListener('mousedown', this.touchStart)
      container.addEventListener('mousemove', this.moveIngredient)
      container.addEventListener('mouseup', this.endTouch)
      container.addEventListener('mouseleave', this.cancel)
    })
  }

  cancel(event) {
    const eventPosition = parseFloat(event.target.style.left);
    const constTenPercent = parseFloat('10')

    if (eventPosition < constTenPercent || eventPosition > -constTenPercent){
      event.target.style.position = 'static';
      event.target.style.left = 0;
    }
    // TODO ANIMATIONS FOR BACK ON POSITION
  }

  touchStart = (event: any) => {
    if (event.target.id != '') {
      event.target.style.position = 'relative';
      event.target.style.left = '0';
    }
    if (event.target.classList == 'container') {
      event.target.classList.add('hey')
    }
  }

  moveIngredient = (event) => {
    const media = window.matchMedia("(min-width: 768px)"); // TODO height limit

    if (media.matches) {
        console.log("Wersja na desktopy");

        const currentPosition = event.clientX;
        event.target.style.left = (currentPosition - event.view.innerWidth / 2) / 75  + '%'; // hardcoded for UI
        // console.log(event.target.style.left)
    } else {
      // console.log("Wersja mobilna");
      console.log(event)
      const currentPosition = event.touches[0].pageX;

      event.target.style.left = (currentPosition - 150) / 10 + '%'; // hardcoded for UI
    }
  }

  endTouch = (event) => {
    const eventPosition = parseFloat(event.target.style.left);
    const constTenPercent = parseFloat('10')

    event.target.classList.remove('hey')

    if (eventPosition > constTenPercent || eventPosition < -constTenPercent) {
      console.log('usuwam')
      const idOfDeletingIngredient = event.target.id;
      if (event.target.tagName != 'div' && event.target.tagName != 'P') { // which elements would be "invisible" for touch and delete
        this.deleteIngredients(idOfDeletingIngredient)
      }
    }

    event.target.style.left = 0;
    event.target.style.position = 'static'
    // TODO ANIMATIONS FOR BACK ON POSITION
  }
}