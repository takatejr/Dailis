import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    User = {
        nickname: new BehaviorSubject<string>(''),
        loggedIn: new BehaviorSubject<boolean>(false),
        access: new BehaviorSubject<number[]>([0]),
        avatar: new BehaviorSubject<string>(''),
    }

    headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true }

    constructor(private http: HttpClient) { }

    login(login: string, password: string) {
        return this.http.post<any>(`${environment.API_URL}users/login`, { login, password }, this.headers)
            .subscribe(() => this.userStatus(),
                catchError(e => throwError(e)))
    }

    logout() {
        return this.http.get<any>(`${environment.API_URL}users/logout`, this.headers)
            .subscribe(() => this.userStatus(),
                catchError(e => throwError(e)))
    }

    userStatus() {
        return this.http.post<any>(`${environment.API_URL}users/status`, {}, { withCredentials: true })
            .subscribe(({ login, access, logged_in }) => {
                this.User.loggedIn.next(logged_in)
                this.User.access.next(access)
                this.User.nickname.next(login)
            },
                catchError(e => throwError(e)))
    }

    register(payload) {
        return this.http.post<any>(`${environment.API_URL}users/register`, payload, this.headers)
            .pipe(
                map(e => e),
                catchError(e => throwError(e))
            )
    }

}