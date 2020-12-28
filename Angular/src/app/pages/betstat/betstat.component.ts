import { Component, OnInit } from '@angular/core';
import { BetstatService } from '../../shared/services/betstatService';
import { Router } from '@angular/router';
import { catchError, count, delay, map, shareReplay, tap } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
import { Matches } from 'src/app/shared/types/matches';
import { handleError } from '../../shared/services/handleError';

@Component({
  selector: 'app-betstat',
  templateUrl: './betstat.component.html',
  styleUrls: ['./betstat.component.scss']
})
export class BetstatComponent implements OnInit {

  constructor(private betstatService: BetstatService,
    private route: Router) {
  }

  url = 'http://localhost:3000/api/betstat/getmatches';


  currentPage = 1;
  matchesPerPage = 7;
  pageNumbers = [];
  currentPosts = [];
  indexOfLastPost: number;


  ngOnInit() {
    this.responsiveBetstatView();
  }

  responsiveBetstatView() {
    const width = '(min-width: 768px)'
    const media = window.matchMedia(width);

    if (media.matches) {
      this.matchesPerPage = 4;
    } else {
      this.matchesPerPage = 3;
    }
  }

  paginate = (pageNumber: number) => {
    this.currentPage = pageNumber;
    const indexOfLastPost = this.currentPage * this.matchesPerPage;
    const indexOfFirstPost = indexOfLastPost - this.matchesPerPage;
    this.currentPosts = this.matches.slice(indexOfFirstPost, indexOfLastPost)
  }

  pagination = () => {
    const totalMatches = Number(this.matches.pipe(map(e => count(e))))
    for (let i = 1; i <= Math.ceil(totalMatches / this.matchesPerPage); i++) {
      this.pageNumbers.push(i);
    }
  }

  matches = this.betstatService.getMatches()
    .pipe(
      map(e => e),
      delay(100),
      tap(() => {
        this.pagination(),
          this.paginate(1)
      }),
      catchError(() => handleError()),
      shareReplay(1),
    )

}
