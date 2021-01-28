import { HttpClient} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Matches } from '../../types/matches';

@Injectable({
    providedIn: 'root'
})
export class BetstatService {
    constructor(private http: HttpClient) { }
    
    matchDetail = {
        home: new BehaviorSubject<string>(''),
        away: new BehaviorSubject<string>(''),
    }

    matchDetails(match: Matches) {
        const { home, away } = match;
        this.matchDetail.home.next(home)
        this.matchDetail.away.next(away)
    }

    getMatches(): Observable<any> {
       return this.http.get(`${environment.API_URL}` + `api/betstat/getmatches`)
       .pipe(
            map((matches) => matches),
            catchError(e => throwError(e))
        )
    }
}