import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { User } from '../../shared/user';
import { tap} from 'rxjs/operators';
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
        return this.http.get<DailyLists[]>(`${this.API_URL}` + `daily-lists`)
    }

    getLastId(): Observable<number> {
       return this.http.get<number>(`${this.API_URL}` + `daily-lists/lastid`)
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
        return this.http.post<DailyLists>('http://localhost:3000/daily-lists/', dailyList, this.httpOptions)
    }

    updateUserDailyList(dailyLists): Observable<any> {
        return this.http.put('http://localhost:3000/daily-lists/', dailyLists, this.httpOptions)
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}