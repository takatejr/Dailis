import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { BetstatService } from '../../../shared/services/betstat/betstatService';

@Component({
  selector: 'app-betstat-details',
  templateUrl: './betstat-details.component.html',
  styleUrls: ['./betstat-details.component.scss']
})
export class BetstatDetailsComponent {

  constructor(private betstat: BetstatService,
    private router: Router) { }


  match = {
    home: this.betstat.matchDetail.home.value,
    away: this.betstat.matchDetail.away.value
  }
  // matchDetail = this.betstat.matchDetails.subscribe(data => data)
}
