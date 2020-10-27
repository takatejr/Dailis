import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../user';
import { catchError, tap } from 'rxjs/operators';


export class Http {
    constructor(private http: HttpClient) { }

    private API_KEY = API_KEY;
    private API_URL = API_URL;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.API_URL}` + 'users')
            .pipe(
                tap(_ => console.log('fetched users')),
                catchError(this.handleError<User[]>('getusers', []))
            );
    }

    getUserById(id: number): Observable<User> {
        const url = `${this.API_URL}` + 'user/' + `${id}`;
        return this.http.get<User>(url)
            .pipe(
                tap(_ => console.log(`fetched user id=${id}`)),
                catchError(this.handleError<User>(`getUser id=${id}`))
            );
    }

    updateHero(user: User): Observable<any> {
        return this.http.put(this.API_URL, user, this.httpOptions)
            .pipe(
                tap(_ => console.log(`updated user id=${user.id}`)),
                catchError(this.handleError<any>('not updated User'))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}