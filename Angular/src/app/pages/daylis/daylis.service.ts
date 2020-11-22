import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../../shared/user';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { settingAPI } from 'src/app/shared/services/ApiKey';
import { DailyLists } from 'src/app/shared/daily-lists';


@Injectable({
    providedIn: 'root'
})
export class DaylisService {
    constructor(private http: HttpClient) { }

    useroff: User;
    API_KEY = settingAPI.API_KEY;
    API_URL = settingAPI.API_URL;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getAllDailyLists(): Observable<DailyLists[]> {
        const url = `${this.API_URL}` + `daily-lists`
        return this.http.get<DailyLists[]>(url)
    }

    getLastId(): Observable<number> {
        const url = `${this.API_URL}` + `daily-lists/lastid`
        return this.http.get<number>(url)
    }

    getUserById(id: number): Observable<User> {
        const url = `${this.API_URL}` + 'user/' + `${id}`;
        return this.http.get<User>(url)
            .pipe(
                tap(_ => console.log(`fetched user id=${id}`)),
                // catchError(this.handleError<User>(`getUser id=${id}`))
            );
    }

    createDailyList(dailyList: DailyLists): Observable<DailyLists> {
        console.log(dailyList)
        const url = `${this.API_URL}` + `daily-lists`
        return this.http.post<DailyLists>(url, dailyList, this.httpOptions).pipe(
            catchError(this.handleError('create Daily List', dailyList))
        );
    }

    updateUserDailyList(dailyLists: DailyLists[]): Observable<any> {
        return this.http.put(`${this.API_URL}` + `daily-lists`, dailyLists, this.httpOptions)
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}