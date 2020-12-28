import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../types/user';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { API_KEY, API_URL, httpOptions} from 'src/app/shared/services/ApiKey';
import { DailyLists } from 'src/app/shared/types/daily-lists';


@Injectable({
    providedIn: 'root'
})
export class DaylisService {
    constructor(private http: HttpClient) { }



    getAllDailyLists(): Observable<DailyLists[]> {
        const url = `${API_URL}` + `daily-lists`
        return this.http.get<DailyLists[]>(url)
    }

    getLastId(): Observable<number> {
        const url = `${API_URL}` + `daily-lists/lastid`
        return this.http.get<number>(url)
            .pipe(
                catchError(this.handleError)
            )
    }

    getUserById(id: number): Observable<User> {
        const url = `${API_URL}` + 'user/' + `${id}`;
        return this.http.get<User>(url)
            .pipe(
                tap(_ => console.log(`fetched user id=${id}`)),
                catchError(this.handleError<User>(`getUser id=${id}`))
            );
    }

    createDailyList(dailyList: DailyLists): Observable<DailyLists> {
        const url = `${API_URL}` + `daily-lists`
        return this.http.post<DailyLists>(url, dailyList, httpOptions).pipe(
            catchError(this.handleError('create Daily List', dailyList))
        );
    }

    updateUserDailyList(dailyLists: DailyLists): Observable<any> {
        return this.http.put(`${API_URL}` + `daily-lists`, dailyLists, httpOptions)
    }

    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}