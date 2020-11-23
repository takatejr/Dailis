import {Component, OnInit} from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Dailis';
  public showOverlay = true;

  constructor(private router: Router){
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }

  ngOnInit(): void {
    window.onscroll = function() {stickyHeader()};

    let navbar = document.getElementById('navbar');
    let header = document.getElementById('header');
    let sticky = navbar.offsetTop;

   const stickyHeader = () => {
      if(window.pageYOffset > sticky){
        navbar.classList.add('sticky');
        header.classList.add('afterSticky');
      } else {
        navbar.classList.remove('sticky');
        header.classList.remove('afterSticky');
      }
    }

  }

















  // function myFunction() {
  //   if (document.documentElement.scrollTop > 0) {
  //     document.getElementById("title").hidden = true;
  //     console.log(document.documentElement.scrollTop)
  //   } else {
  //     document.getElementById("title").hidden = false;
  //   }
  // }


}
