import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DailyLists } from '../../shared/types/daily-lists';
import { DaylisIngredientsService } from '../../shared/services/daylis/daylis-ingredients.service';
import { DaylisService } from '../../shared/services/daylis/daylis.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-daylis',
  templateUrl: './daylis.component.html',
  styleUrls: ['./daylis.component.scss'],
  providers: [DaylisService],
  animations: [
    trigger('swap',
     [
      // Enter Animation
      transition(':leave', [
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

        animate('1000ms', style({
          height: '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*',
        })),
        animate(3000)
      ])

    ]),

    trigger('swapp', [
      transition(':enter', [
        query('.daily-btn, section', [
          style({
            opacity: 0,
            height: 0
          }),
          stagger(100, [
            animate('0.5s ease')
          ])
        ],
        {optional: true})
      ])
    ])
  ]
})
export class DaylisComponent implements OnInit, OnDestroy {
  constructor(
    private daylisIngredients: DaylisIngredientsService,
    private daylisService: DaylisService,
    ) { }

  dailyLists: Array<DailyLists> = [];
  lastID = 0;
  nameOfNewList = '';
  dailyView = false;

  ngOnInit(): void {
    this.getLastID();
    this.getAllDailyLists();
  }

  ngOnDestroy(): void {
  }

  getLastID = () => this.daylisService.getLastId().pipe(first()).subscribe(e => this.lastID = e);

  getAllDailyLists = () => this.daylisService.getAllDailyLists().pipe(first()).subscribe(data => this.dailyLists = data);

  toggleDaylisDetails = () => this.dailyView = !this.dailyView;

  showDetailsOfDaylis = (e) => this.daylisIngredients.showDetailsOfDaylis(e);

  countBoughtIngredients(i: number): number {
    let countTrue = 0;
    for (const ingredient of this.dailyLists[i].ingredients) {
      ingredient.bought === true ? countTrue++ : null;
    }
    return countTrue;
  }

  addNewDailyList = (titleOfList: string) => {
    if (this.nameOfNewList === '') {
      alert('Add name of new list');
    } else {
      this.getLastID();
      const daily: DailyLists =
      {
        id: ++this.lastID,
        title: titleOfList,
        ingredients:
          [
          ]
      };
      this.daylisService.createDailyList(daily).subscribe(daily => daily);
      this.dailyLists.push(daily);
      this.nameOfNewList = '';
    }
  }
}
