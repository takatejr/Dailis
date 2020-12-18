import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/shared/services/ApiKey';
@Injectable({
    providedIn: 'root'
})
export class BetstatService {
    constructor(private http: HttpClient) { }
    
    getMatches(): Observable<any> {
        const url = `${API_URL}` + `api/betstat/getmatches`
        const matches = this.http.get(url)
        return matches
    }
}