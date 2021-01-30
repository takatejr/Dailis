import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { BetstatService } from '../../../shared/services/betstat/betstatService';

@Component({
  selector: 'app-betstat-details',
  templateUrl: './betstat-details.component.html',
  styleUrls: ['./betstat-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BetstatDetailsComponent {

  constructor(private betstat: BetstatService,
    private router: Router) {
    this.betstat.matchDetails$.subscribe(data => this.match = data)
  }


  match = {
    home: '',
    away: ''
  }

  awg() {
    console.log(this.match)
  }
}
