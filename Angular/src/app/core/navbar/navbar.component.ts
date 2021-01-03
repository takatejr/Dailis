import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'daylis-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  featuresList = [
    {
      app: 'daylis',
      position: 1,
      title: 'daylis',
    },
    {
      app: 'kalendarz',
      position: 2,
      title: 'cookbook',
    },
    {
      app: 'recipes',
      position: 3,
      title: 'recipes',
    },
    {
      app: 'awg',
      position: 4,
      title: 'awg',
    },
    {
      app: 'login',
      position: 5,
      title: 'login'
    }
  ];
}
