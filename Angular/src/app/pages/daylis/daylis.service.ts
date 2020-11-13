import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../../shared/user';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { settingAPI } from 'src/app/shared/services/ApiKey';

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

    getAllDailyLists(): Observable<User[]> {
        return this.http.get<User[]>(`${this.API_URL}` + `user`)
            .pipe(
                tap(_ => console.log('fetched users')),
                // catchError(this.handleError<User[]>('getusers', []))
            );
    }

    getLastId(): Observable<number> {
        return this.http.get<number>(`${this.API_URL}` + `daily-lists`)
            .pipe(
                tap(e => e),
            )
    }

    getUserById(id: number): Observable<User> {
        const url = `${this.API_URL}` + 'user/' + `${id}`;
        return this.http.get<User>(url)
            .pipe(
                tap(_ => console.log(`fetched user id=${id}`)),
                // catchError(this.handleError<User>(`getUser id=${id}`))
            );
    }

    updateUserDailyList(user: User = this.useroff): Observable<any> {
        return this.http.put(this.API_URL, user, this.httpOptions)
            .pipe(
                tap(_ => console.log(`updated user id=${user.id}`)),
                // catchError(this.handleError<any>('not updated User'))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}