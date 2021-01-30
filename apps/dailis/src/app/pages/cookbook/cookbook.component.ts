import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent {
  TOGGLE_SEARCH = true;

  toggleSearch(){
    if (this.TOGGLE_SEARCH){
      document.getElementById('myOverlay').style.display = 'block';
      this.TOGGLE_SEARCH = !this.TOGGLE_SEARCH;
    } else {
      document.getElementById('myOverlay').style.display = 'none';
      this.TOGGLE_SEARCH = !this.TOGGLE_SEARCH;
    }
  }
}
