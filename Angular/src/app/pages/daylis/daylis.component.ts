import { animate, animation, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DailyLists } from '../../shared/daily-lists';
import { DaylisIngredientsService } from '../../shared/services/daylis-ingredients.service';
import { DaylisService } from './daylis.service';

@Component({
  selector: 'app-daylis',
  templateUrl: './daylis.component.html',
  styleUrls: ['./daylis.component.scss'],
  providers: [DaylisService],
  animations: [
    trigger('swap',
     [
      // Enter Animation
      transition('* => *', [
        // initial 
        style({
          height: 10,
          opacity: 0,
          transform: 'scale(0.65)',
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),

        //

        animate('500ms', style({
          height: '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*',
        })),
        animate(300)
      ])

    ])
  ]
})
export class DaylisComponent implements OnInit, OnDestroy {
  constructor(
    private daylisIngredients: DaylisIngredientsService,
    private http: DaylisService,
    ) { }

  ngOnInit(): void {
    this.getLastID();
    this.getAllDailyLists();
  }

  ngOnDestroy(): void {
    console.log(this.dailyLists)
  }

  dailyLists: Array<DailyLists> = [];
  lastID: number = 0;
  nameOfNewList = "";
  dailyView: boolean = false

  getLastID = () => this.http.getLastId().subscribe(e => this.lastID = e)

  getAllDailyLists = () => this.http.getAllDailyLists().subscribe(data => this.dailyLists = data)

  toggleDaylisDetails = () => this.dailyView = !this.dailyView

  showDetailsOfDaylis = (e) => this.daylisIngredients.showDetailsOfDaylis(e)

  countBoughtIngredients(i: number): number {
    let countTrue = 0;
    for (let ingredient of this.dailyLists[i].ingredients) {
      ingredient.bought == true ? countTrue++ : null;
    }
    return countTrue
  }

  addNewDailyList = (titleOfList: string) => {
    if (this.nameOfNewList == "") {
      alert('Add name of new list')
    } else {
      this.getLastID()
      const daily: DailyLists =
      {
        id: ++this.lastID,
        title: titleOfList,
        ingredients:
          [
            //   {
            //   id: 13,
            //   titleOfProduct: 'hehe',
            //   bought: true,
            //   quantity: 3,
            //   unit: 'kg',
            // },
            // {
            //   id: 13,
            //   titleOfProduct: 'hehe',
            //   bought: false,
            //   quantity: 3,
            //   unit: 'kg',
            // }
          ]
      }
      console.log(this.dailyLists)
      this.http.createDailyList(daily).subscribe(daily => daily)
      this.dailyLists.push(daily)
      this.nameOfNewList = '';
    }
  };
}
