import { Component, OnInit } from '@angular/core';
import { DailyLists } from '../../shared/daily-lists';
import { ActivatedRoute } from '@angular/router';
import { DaylisIngredientsService } from '../../shared/services/daylis-ingredients.service';

@Component({
  selector: 'app-daylis',
  templateUrl: './daylis.component.html',
  styleUrls: ['./daylis.component.scss']
})
export class DaylisComponent implements OnInit {
  nameOfNewList = "";

  countBoughtIngredients(i): number {
    let countTrue = 0;
    for (let ingredient of this.dailyLists[i].ingredients) {
      ingredient.bought == true ? countTrue++ : null;
    }
    return countTrue
  }

  dailyLists: Array<DailyLists> = [
    {
      id: 0,
      titleOfList: 'Dieta workowa',
      ingredients: []
    },
    {
      id: 1,
      titleOfList: 'Dieta wt',
      ingredients: []
    },
    {
      id: 2,
      titleOfList: 'Dieta sr',
      ingredients: [
        {
          titleOfProduct: 'apple',
          bought: true,
          quantity: 2,
          unit: 'szt',
          from: 'zewsząd'
        },
        {
          titleOfProduct: 'orange',
          bought: false,
          quantity: 2,
          unit: 'szt',
        },
        {
          titleOfProduct: 'juice',
          bought: false,
          quantity: 1,
          unit: 'bottle',
        },
      ]
    },
    {
      id: 3,
      titleOfList: 'Dieta czw',
      ingredients: [
        {
          titleOfProduct: 'mleko',
          bought: true,
          quantity: 3,
          unit: 'szt',
        },
        {
          titleOfProduct: 'banany',
          bought: true,
          quantity: 33,
          unit: 'szt',
        },
        {
          titleOfProduct: 'ziemniaki',
          bought: true,
          quantity: 333,
          unit: 'kg',
        },
      ]
    },
    {
      id: 4,
      titleOfList: 'Dieta pt',
      ingredients: [
        {
          titleOfProduct: 'mleko',
          bought: true,
          quantity: 4,
          unit: 'szt',
        },
        {
          titleOfProduct: 'banany',
          bought: true,
          quantity: 44,
          unit: 'szt',
        },
        {
          titleOfProduct: 'ziemniaki',
          bought: false,
          quantity: 444,
          unit: 'kg',
        },
      ]
    },
  ];

  addNewDailyList = (titleOfList) => {
    this.dailyLists.push({
      id: 4,
      titleOfList: titleOfList,
      ingredients: []
    });
    this.nameOfNewList = '';
  };

  constructor(private route: ActivatedRoute,
    private daylisIngredients: DaylisIngredientsService) { }

  showDetailsOfDaylis(e) {
    this.daylisIngredients.showDetailsOfDaylis(e);
  }

  ngOnInit(): void {
  }
}
