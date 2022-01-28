import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
  })
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private dataService: DataService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('auth_token');

    if (token && !request.headers.has('Authorization') && request.method.toUpperCase() == 'POST') {
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }
    if (!request.headers.has('Content-Type') && request.method.toUpperCase() == 'POST') {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) =>{
        if(error instanceof HttpErrorResponse){
          // Server error
          console.log('server');
          console.log(error);
          this.dataService.getError(error.error)
          return throwError(error.error)
        }else{
           // Client error
           console.log('Client');
          console.log(error);
          this.dataService.getError(error)
          return throwError(error)
         
        }
        
      })
    );
  }
}


