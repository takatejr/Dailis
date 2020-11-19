import { Component, OnDestroy, OnInit } from '@angular/core';
import { DailyLists } from '../../shared/daily-lists';
import { DaylisIngredientsService } from '../../shared/services/daylis-ingredients.service';
import { DaylisService } from './daylis.service';
import { User } from 'src/app/shared/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  getLastID = () => this.http.getLastId().subscribe(e => this.lastID = e)
  getAllDailyLists = () => this.http.getAllDailyLists().subscribe(data => this.dailyLists = data)

  ngOnInit():void {
this.getAllDailyLists();
  }

  ngOnDestroy(): void {
    this.getAllDailyLists().unsubscribe()
    this.http.updateUserDailyList(this.dailyLists).subscribe(e => e)
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
      let n = Number(this.getLastID());
      const daily = {
        id: ++n,
        title: titleOfList,
        ingredients: []
      }
      this.http.createDailyList(daily)
      // this.dailyLists.push({
      //   id: ++this.lastID,
      //   title: titleOfList,
      //   ingredients: []
      // });
      this.getAllDailyLists().unsubscribe();
      this.getAllDailyLists();
      this.getLastID().unsubscribe()
      this.nameOfNewList = '';
    }
  };


  // showDetailsOfDaylis(e) {
  //   this.daylisIngredients.showDetailsOfDaylis(e);
  // }



}
