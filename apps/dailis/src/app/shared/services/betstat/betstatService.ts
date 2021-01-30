import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Matches } from '../../types/matches';

@Injectable({
    providedIn: 'root'
})
export class BetstatService {
    constructor(private http: HttpClient) { }

    matchDetail = new BehaviorSubject({
        home: (''),
        away: (''),
    })

    matchDetails$ = this.matchDetail.asObservable();

    updateMatchDetail(match: Matches) {
        const { home, away } = match;
        this.matchDetail.next(
            {
                home: home,
                away: away
            }
        )
    }

    getMatches(): Observable<any> {
        return this.http.get(`${environment.API_URL}` + `api/betstat/getmatches`)
            .pipe(
                map((matches) => matches),
                catchError(e => throwError(e))
            )
    }

    historyMatches(matchID: string): Observable<any> {
        return this.http.post(`${environment.API_URL}` + `api/betstat/historymatches`, matchID)
            .pipe(
                map((matches) => matches),
                catchError(e => throwError(e))
            )
    }
}