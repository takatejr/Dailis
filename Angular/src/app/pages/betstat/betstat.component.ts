import { AfterViewChecked, Component, OnInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-betstat',
  templateUrl: './betstat.component.html',
  styleUrls: ['./betstat.component.scss']
})
export class BetstatComponent implements OnInit {
  indexOfLastPost: number;

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/api/betstat/getmatches'

  ngOnInit(): void {
    this.getMatches()
  }

  getMatches() {
    if (this.matches.length == 0) {
      this.http.get<any>(this.url).subscribe(el => this.matches = el)
    }
    setTimeout(() => {
      this.pagination()
      this.paginate(1)
      console.log('hsuehsuehe')
    }, 100)
  }

  matches: Array<any> = [];
  currentPage: number = 1;
  matchesPerPage: number = 10
  pageNumbers = [];
  currentPosts = [];

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
