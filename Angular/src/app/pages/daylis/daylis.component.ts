import { Component, OnDestroy, OnInit } from '@angular/core';
import { DailyLists } from '../../shared/daily-lists';
import { DaylisIngredientsService } from '../../shared/services/daylis-ingredients.service';
import { DaylisService } from './daylis.service';
import { User } from 'src/app/shared/user';

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

  dailyLists: Array<DailyLists> = [];
  lastID: number;


  ngOnInit() {
    // this.http.getAllDailyLists().subscribe(daily => {
    //   daily.map((el: DailyLists) => {
    //     el.id
    //   })
    // })

    this.http.getAllDailyLists().subscribe(data => this.dailyLists = data)
    this.http.getLastId().subscribe(e => this.lastID = e)
  }

  ngOnDestroy() {
    this.http.updateUserDailyList(this.dailyLists[0].title).subscribe(e => console.log(e))
  }

  nameOfNewList = "";

  countBoughtIngredients(i: number): number {
    let countTrue = 0;
    for (let ingredient of this.dailyLists[i].ingredients) {
      ingredient.bought == true ? countTrue++ : null;
    }
    return countTrue
  }

  addNewDailyList = (titleOfList: string) => {
    if (this.nameOfNewList == "") {
      alert('Add name of list')
    } else {
      this.dailyLists.push({
        id: ++this.lastID,
        title: titleOfList,
        ingredients: []
      });
      this.nameOfNewList = '';
    }
  };


  // showDetailsOfDaylis(e) {
  //   this.daylisIngredients.showDetailsOfDaylis(e);
  // }



}
