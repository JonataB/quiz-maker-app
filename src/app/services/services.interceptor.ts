import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ServicesInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (
          error instanceof HttpErrorResponse &&
          error.status >= 400 &&
          error.status < 500
        ) {
          alert('Seems some services not works. Please try later');
        } else if (error.status === 0 && !navigator.onLine) {
          alert('Please check your connection.');
        } else {
          alert('Some error occurs. Please try later');
        }

        return throwError(error);
      })
    );
  }
}
