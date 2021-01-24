import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../../types/user';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { DailyLists } from 'src/app/shared/types/daily-lists';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class DaylisService {
    constructor(private http: HttpClient) { }

    headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true }

    getAllDailyLists(): Observable<DailyLists[]> {
        return this.http.get<DailyLists[]>(`${environment.API_URL}` + `daily-lists`)
        .pipe(
            catchError((e) => throwError(e))
        )
    }

    getLastId(): Observable<number> {
        return this.http.get<number>(`${environment.API_URL}` + `daily-lists/lastid`)
            .pipe(
                catchError((e) => throwError(e))
            )
    }

    getUserById(id: number): Observable<User> {
        return this.http.get<User>(`${environment.API_URL}` + 'user/' + `${id}`)
            .pipe(
                tap(_ => console.log(`fetched user id=${id}`)),
                catchError((e) => throwError(e))
            );
    }

    createDailyList(dailyList: DailyLists): Observable<DailyLists> {
        return this.http.post<DailyLists>(`${environment.API_URL}` + `daily-lists`, dailyList, this.headers)
        .pipe(
            catchError((e) => throwError(e))
        );
    }

    updateUserDailyList(dailyLists: DailyLists): Observable<any> {
        return this.http.put(`${environment.API_URL}` + `daily-lists`, dailyLists, this.headers)
        .pipe(
            catchError((e) => throwError(e))
        );
    }
}