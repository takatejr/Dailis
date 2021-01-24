import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BetstatService {
    constructor(private http: HttpClient) { }
    
    getMatches(): Observable<any> {
       return this.http.get(`${environment.API_URL}` + `api/betstat/getmatches`)
       .pipe(
            map((matches) => matches),
            catchError(e => throwError(e))
        )
    }
}