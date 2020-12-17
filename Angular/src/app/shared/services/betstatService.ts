import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../types/user';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/shared/services/ApiKey';


@Injectable({
    providedIn: 'root'
})
export class BetstatService {
    constructor(private http: HttpClient) { }
    
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getMatches(): Observable<any> {
        const url = `${API_URL}` + `api/betstat/getmatches`
        const matches = this.http.get(url)
        return matches
    }
}