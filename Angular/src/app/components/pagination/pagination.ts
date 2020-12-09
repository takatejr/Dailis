import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  @Input() matches: Array<any> = []
  @Input() totalMatches: number;
  @Input() currentPage: number = 1;
  @Input() postsPerPage: number = 10

  indexOfLastPost = this.currentPage * this.postsPerPage;
  indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;
  currentPosts = this.matches.slice(this.indexOfFirstPost, this.indexOfLastPost);

  paginate = (pageNumber) => {this.currentPage = pageNumber}



}
