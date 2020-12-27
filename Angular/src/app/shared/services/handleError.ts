import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function handleError() { 
    return catchError(error => {
        console.log(error)
        return EMPTY
    })    
}