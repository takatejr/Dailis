import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../shared/services/auth/auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if ([401, 403].indexOf(error.status) !== -1) {
                        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                        errorMessage = `Permission error: ${error.error.message || error.statusText}`;
                        this.authenticationService.logout();
                    } else if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    }
                    console.log(errorMessage);
                    //TODO: Show notification that data cannot be retrieved due to ... any reason
                    return throwError(errorMessage);
                })
            );
    }
}