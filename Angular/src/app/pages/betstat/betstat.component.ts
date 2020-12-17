import { Component, OnInit } from '@angular/core';
import { BetstatService } from '../../shared/services/betstatService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-betstat',
  templateUrl: './betstat.component.html',
  styleUrls: ['./betstat.component.scss']
})
export class BetstatComponent implements OnInit {

  constructor(private betstatService: BetstatService,
    private route: Router) {
    if (this.matches.length === 0) {
      console.log('pobieranie meczy')
      this.betstatService.getMatches().subscribe(matches => {
        this.matches = matches;
        setTimeout(() => {
          this.pagination()
          this.paginate(1)
        }, 1000);
        console.log(this.matches)
      })
    }

  }

  ngOnInit() {
    this.responsiveBetstatView();
  }

  url = 'http://localhost:3000/api/betstat/getmatches'

  matches: Array<any> = [];
  currentPage: number = 1;
  matchesPerPage: number = 7
  pageNumbers = [];
  currentPosts = [];
  indexOfLastPost: number;

  responsiveBetstatView() {
    const media = window.matchMedia("(min-width: 768px)");
    if (media.matches) {
      this.matchesPerPage = 4
    } else {
      this.matchesPerPage = 3
    }
  }

  paginate = (pageNumber: number) => {
    this.currentPage = pageNumber
    const indexOfLastPost = this.currentPage * this.matchesPerPage;
    const indexOfFirstPost = indexOfLastPost - this.matchesPerPage;
    this.currentPosts = this.matches.slice(indexOfFirstPost, indexOfLastPost);
  }

  pagination = () => {
    const totalMatches = this.matches.length;
    for (let i = 1; i <= Math.ceil(totalMatches / this.matchesPerPage); i++) {
      this.pageNumbers.push(i);
    }
  }

  goTo() {
    if(this.route.url == '/'){
      return true
    }
    if(this.route.url == '/betstat') {
      return false
    }
  }
}
