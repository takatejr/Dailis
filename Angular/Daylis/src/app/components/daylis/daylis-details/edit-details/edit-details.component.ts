import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Ingredients} from "../../../../shared/ingredients";

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnChanges {

  @Input() index;
  @Input() ingredientsDetails;
  @Output() changedIngredientsDetails =  new EventEmitter();

  titles: string[] = [];
  quantities: number[] = [];
  units: string[] = [];

  ngOnChanges(): void {
    this.updateDetails()
  }

  emitChangedIngredients() {
    this.changedIngredientsDetails.emit([this.index, this.titles, this.quantities, this.units]);
  }

  updateDetails(){
    this.titles.push(this.ingredientsDetails.titleOfProduct);
    this.quantities.push(this.ingredientsDetails.quantity);
    this.units.push(this.ingredientsDetails.unit);
  }
}
