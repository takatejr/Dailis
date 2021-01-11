import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../types/user';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { httpOptions} from 'src/app/shared/services/ApiKey';
import { DailyLists } from 'src/app/shared/types/daily-lists';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class DaylisService {
    constructor(private http: HttpClient) { }

    getAllDailyLists(): Observable<DailyLists[]> {
        return this.http.get<DailyLists[]>(`${environment.API_URL}` + `daily-lists`)
    }

    getLastId(): Observable<number> {
        return this.http.get<number>(`${environment.API_URL}` + `daily-lists/lastid`)
            .pipe(
                catchError(this.handleError)
            )
    }

    getUserById(id: number): Observable<User> {
        return this.http.get<User>(`${environment.API_URL}` + 'user/' + `${id}`)
            .pipe(
                tap(_ => console.log(`fetched user id=${id}`)),
                catchError(this.handleError<User>(`getUser id=${id}`))
            );
    }

    createDailyList(dailyList: DailyLists): Observable<DailyLists> {
        return this.http.post<DailyLists>(`${environment.API_URL}` + `daily-lists`, dailyList, httpOptions)
        .pipe(
            catchError(this.handleError('create Daily List', dailyList))
        );
    }

    updateUserDailyList(dailyLists: DailyLists): Observable<any> {
        return this.http.put(`${environment.API_URL}` + `daily-lists`, dailyLists, httpOptions)
    }

    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}