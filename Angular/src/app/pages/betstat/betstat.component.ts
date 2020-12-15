import { Component } from '@angular/core';
import { BetstatService } from '../../shared/services/betstatService';

@Component({
  selector: 'app-betstat',
  templateUrl: './betstat.component.html',
  styleUrls: ['./betstat.component.scss']
})
export class BetstatComponent {

  constructor(private betstatService: BetstatService) {
    if (this.matches.length === 0) {
      console.log('pobieranie meczy')
      this.betstatService.getMatches().subscribe(matches => {
        this.matches = matches;
        setTimeout(() => {
          this.pagination()
          this.paginate(1)
        }, 100)
      })
    }
  }

  url = 'http://localhost:3000/api/betstat/getmatches'

  matches: Array<any> = [];
  currentPage: number = 1;
  matchesPerPage: number = 7
  pageNumbers = [];
  currentPosts = [];
  indexOfLastPost: number;

  paginate = (pageNumber) => {
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
}
