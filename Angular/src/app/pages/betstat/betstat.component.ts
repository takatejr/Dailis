import { Component, OnInit } from '@angular/core';
import { BetstatService } from '../../shared/services/betstat/betstatService';
import { Router } from '@angular/router';
import { shareReplay } from 'rxjs/operators';
import { Matches } from 'src/app/shared/types/matches';

@Component({
  selector: 'app-betstat',
  templateUrl: './betstat.component.html',
  styleUrls: ['./betstat.component.scss']
})
export class BetstatComponent implements OnInit {

  constructor(private betstatService: BetstatService,
    private route: Router) {
  }

  matches: Matches[];
  currentPage = 1;
  matchesPerPage = 7;
  pageNumbers = [];
  currentPosts: Matches[];
  indexOfLastPost: number;

  ngOnInit() {
    this.responsiveBetstatView();
    this.betstatService.getMatches()
      .subscribe(
        (matches: Matches[]) => {
          this.matches = matches;
          this.pagination();
          this.paginate(1);
          shareReplay(1)
        }
      )
  }

  responsiveBetstatView() {
    const width = '(min-width: 768px)'
    const media = window.matchMedia(width);

    if (media.matches) {
      this.matchesPerPage = 12;
    } else {
      this.matchesPerPage = 6;
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
    const k = Math.ceil(totalMatches / this.matchesPerPage);
    for (let i = 1; i <= k; i++) {
      this.pageNumbers.push(i);
    }
  }

  checkRoute(){
    const url = this.route.url.split("/")
    if(!url.includes('betstat')){
      return false
    }
    return true
  }
}
