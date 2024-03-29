import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { LoginService } from './services/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _loginServ:LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    if (localStorage.getItem("tokenCheck"))
    {
      const token : string = this._loginServ.getToken();
      request = request.clone({ headers : request.headers.set('Authorization', token)});

    }
    else{

      return next.handle(request);
    }
  }
}
