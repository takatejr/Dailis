import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnChanges, OnInit {

  @Input() index: number;
  @Input() ingredientsDetails;
  @Output() changedIngredientsDetails = new EventEmitter();

  titles: string[] = [];
  quantities: number[] = [];
  units: string[] = [];

  ngOnChanges(): void {
    this.updateDetails()
  }

  ngOnInit(): void {
    let divs = document.querySelectorAll('div');
    divs.forEach(div => {
      div.addEventListener('keyup', (event) => event.key == 'Enter' ? this.emitChangedIngredients() : null)
    })
  }

  emitChangedIngredients() {
    this.changedIngredientsDetails.emit([this.index, this.titles, this.quantities, this.units]);
  }

  updateDetails() {
    this.titles.push(this.ingredientsDetails.titleOfProduct);
    this.quantities.push(this.ingredientsDetails.quantity);
    this.units.push(this.ingredientsDetails.unit);
  }
}