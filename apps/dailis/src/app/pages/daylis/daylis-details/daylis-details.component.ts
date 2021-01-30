import { animate, style, transition, trigger } from '@angular/animations';
import { Component, AfterViewInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { DaylisIngredientsService } from "../../../shared/services/daylis/daylis-ingredients.service";
import { DaylisService } from '../../../shared/services/daylis/daylis.service';
import { DailyLists } from '../../../shared/types/daily-lists';
@Component({
  selector: 'app-daylis-details',
  templateUrl: './daylis-details.component.html',
  styleUrls: ['./daylis-details.component.scss'],
  animations: [
    trigger('swap',
     [
      // Enter Animation
      transition('* => *', [
        // initial 
        style({
          height: 0,
          opacity: 0.05,
          transform: 'scale(0.85)',
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),

        //

        animate('5ms', style({
          height: '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*',
        })),
        animate(200)
      ])

    ])
  ]
})
export class DaylisDetailsComponent implements AfterViewInit, OnDestroy {
  constructor(private daylisIngredients: DaylisIngredientsService,
    private http: DaylisService) {
    daylisIngredients.ingredients$.subscribe(ing=> {
      const { ingredients, id, title } = ing
      this.ingredients = ingredients;
      this.dailyListID = id;
      this.title = title;
    });
  }

  ngOnDestroy() {
    const daily: DailyLists = {
      id: this.dailyListID,
      title: this.title,
      ingredients: this.ingredients
    }
    this.http.updateUserDailyList(daily).subscribe(() => '')
  }

  dailyListID: number;
  title: string;
  ingredients: any = [];
  EDIT_DETAILS: number[] = [];

  @Output() handleDailyViewOutput = new EventEmitter();



  handleDailyViewer = () => this.handleDailyViewOutput.emit()

  addIngredient = () => this.ingredients.push({ titleOfProduct: "", bought: false, quantity: null, unit: "" })

  deleteIngredients = (i: number) => this.ingredients.splice(i, 1)

  containers = document.querySelectorAll('.container');

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


  pressEnterToAccept() {
    const divs = document.querySelectorAll('div.editor');
    divs.forEach(div => {
      div.addEventListener('keydown', this.editedIngredient)
    })
  }


  ngAfterViewInit() {
    // const containers = document.querySelectorAll('.container');
    // containers.forEach((container) => {
    //   container.addEventListener('touchstart', this.touchStart)
    //   container.addEventListener('touchmove', this.moveIngredient)
    //   container.addEventListener('touchend', this.endTouch)

    //   container.addEventListener('mousedown', this.touchStart)
    //   container.addEventListener('mousemove', this.moveIngredient)
    //   container.addEventListener('mouseup', this.endTouch)
    //   container.addEventListener('mouseleave', this.cancel)
    // })
  }

  cancel(event) {
    const eventPosition = parseFloat(event.target.style.left);
    const constTenPercent = parseFloat('10')

    if (eventPosition < constTenPercent || eventPosition > -constTenPercent) {
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
    if (event.target.classList == 'a.container') {
      event.target.classList.add('hey')
    }
  }

  moveIngredient = (event) => {
    const media = window.matchMedia("(min-width: 768px)"); // TODO height limit

    if (media.matches) {
      console.log("Wersja na desktopy");

      const currentPosition = event.clientX;
      event.target.style.left = (currentPosition - event.view.innerWidth / 2) / 50 + '%'; // hardcoded for UI
    } else {
      console.log("Wersja mobilna");
      if (event.type === "touchmove"){
      const currentPosition = event.touches[0].clientX;

      event.target.style.left = (currentPosition - 150) / 10 + '%'; // hardcoded for UI
      }
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

// isBottom(el) {
//   return el.getBoundingClientRect().bottom <= window.innerHeight;
// }

// componentDidMount() {
//   document.addEventListener('scroll', this.trackScrolling);
// }

// componentWillUnmount() {
//   document.removeEventListener('scroll', this.trackScrolling);
// }

// trackScrolling = () => {
//   const wrappedElement = document.getElementById('header');
//   if (this.isBottom(wrappedElement)) {
//     console.log('header bottom reached');
//     document.removeEventListener('scroll', this.trackScrolling);
//   }
// };
// handleScroll(event) {
//   const target = event.target;
//   if (target.scrollHeight - target.scrollTop === target.clientHeight){

//   }
// }
