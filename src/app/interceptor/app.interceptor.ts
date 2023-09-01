import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request interceptor', request)
    const token = "kajal"+"manisha";
    request = request.clone({setHeaders:{"Authorization":"Bearer "+token}});

    return next.handle(request).pipe(map((resp: any) => {
      console.log('response received');
      return resp
    }));
  }
}
