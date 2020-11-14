import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Dailis';

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
