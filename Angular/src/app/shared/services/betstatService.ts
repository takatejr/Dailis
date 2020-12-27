import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/shared/services/ApiKey';
import { map } from 'rxjs/operators';
import { handleError } from './handleError';
import { Matches } from '../types/matches';
@Injectable({
    providedIn: 'root'
})
export class BetstatService {
    constructor(private http: HttpClient) { }
    
    getMatches(): Observable<any> {
        const url = `${API_URL}` + `api/betstat/getmatches`
        const matches = this.http.get(url).pipe(
            map((matches) => matches),
            handleError(),
        )
        return matches
    }
}