import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private _http : HttpClient, private _router : Router) {
    // console.log(environment);
   }

  doLogin(obj){
    return this._http.post<any>("http://localhost:3000/api/login", obj);
  }



  
    logout(){
      localStorage.removeItem("tokenCheck");
      this._router.navigate(["/login"]);
    }
    getToken(){
      return localStorage.getItem("tokenCheck");
    }
    
    isLoggedIn(){
      if(localStorage.getItem("tokenCheck"))
      {
        return true;
      }
      else{
        return false;
      }
    }
    
  

}
