import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    loggedIn = new BehaviorSubject<boolean>(false);
    role = new BehaviorSubject<number[]>([0]);

    constructor(private http: HttpClient) {
    }

    headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true }

    login(credentials) {
        return this.http.post<any>(`${environment.API_URL}` + `auth/login`, credentials, this.headers)
            .subscribe(() => this.userStatus()),
            (err) => console.log('Error: ' + err);
    }

    logout() {
        return this.http.get<any>(`${environment.API_URL}/user/logout`, this.headers)
        .subscribe(() => this.userStatus())
    }

    userStatus() {
        this.checkLogin();
        this.checkRole()
    }

    checkLogin() {
        return this.http.post<any>(`${environment.API_URL}/user/cookie`, {}, { withCredentials: true })
            .subscribe((isLoggedIn: boolean) => this.loggedIn.next(isLoggedIn))
    }

    checkRole() {
        return this.http.post<any>(`${environment.API_URL}/user/role`, {}, { withCredentials: true })
            .subscribe((role: number[]) => this.role.next(role))
    }

    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}