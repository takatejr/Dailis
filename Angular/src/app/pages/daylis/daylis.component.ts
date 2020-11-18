import { Component, OnDestroy, OnInit } from '@angular/core';
import { DailyLists } from '../../shared/daily-lists';
import { DaylisIngredientsService } from '../../shared/services/daylis-ingredients.service';
import { DaylisService } from './daylis.service';

@Component({
  selector: 'app-daylis',
  templateUrl: './daylis.component.html',
  styleUrls: ['./daylis.component.scss'],
  providers: [DaylisService]
})
export class DaylisComponent implements OnInit, OnDestroy {

  constructor(
    private daylisIngredients: DaylisIngredientsService,
    private http: DaylisService) { }


  ngOnInit() {
    this.http.getAllDailyLists().subscribe(e => console.log(e))
  }

  ngOnDestroy() {
    this.http.updateUserDailyList();
  }

  nameOfNewList = "";

  countBoughtIngredients(i: number): number {
    let countTrue = 0;
    for (let ingredient of this.dailyLists[i].ingredients) {
      ingredient.bought == true ? countTrue++ : null;
    }
    return countTrue
  }

  dailyLists: Array<DailyLists> = []


  //   {
  //     id: 2,
  //     title: 'Dieta sr',
  //     ingredients: [
  //       {
  //         titleOfProduct: 'apple',
  //         bought: true,
  //         quantity: 2,
  //         unit: 'szt',
  //         from: 'zewsząd'
  //       },
  //       {
  //         titleOfProduct: 'orange',
  //         bought: false,
  //         quantity: 2,
  //         unit: 'szt',
  //       },
  //       {
  //         titleOfProduct: 'juice',
  //         bought: false,
  //         quantity: 1,
  //         unit: 'bottle',
  //       },
  //     ]
  //   },

  addNewDailyList = (titleOfList) => {
    if (this.nameOfNewList == "") {
      alert('Add name of list')
    } else {
      let lastId = Number(this.http.getLastId)
      this.dailyLists.push({
        id: lastId++,
        title: titleOfList,
        ingredients: []
      });
      this.nameOfNewList = '';
    }
  };


  showDetailsOfDaylis(e) {
    this.daylisIngredients.showDetailsOfDaylis(e);
  }



}
