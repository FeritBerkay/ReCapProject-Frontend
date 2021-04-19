import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  //Butun hhtp isteklerini duzenleyecegiz.
  constructor() {}
  //request post işlemi(istek) next ise pakete bişi koyup yollucam denilen kısım.
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token")
    let newRequest:HttpRequest<any>;
    newRequest= request.clone({
      //istegi aldım altakileri ekledim. Ole gonderdim.
      headers:request.headers.set("Authorization","Bearer " + token)
    })
    return next.handle(newRequest);
  }
}
