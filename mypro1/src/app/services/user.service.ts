import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient, private _loginServ : LoginService) { }


  getUserInfo(){
    return this._http.get<any>("http://localhost:3000/api/getuser");
  }
  demo(){
    return this._http.get<any>("http://localhost:3000/api/hello");
  }

}
