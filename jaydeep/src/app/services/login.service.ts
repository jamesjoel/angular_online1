import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient, private _router : Router) {
    // console.log(environment);
   }

   // -------login code
  doLogin(obj){
    
    return this._http.post<any>("http://localhost:3000/api/login", obj);
  }
  
  getToken(){
    return localStorage.getItem('tokenChek');
  }

  isLoggedIn(){
    if(localStorage.getItem('tokenChek')){
      
      return true;
    }
    else{
      return false;
    }
  }
  
  logout(){
    localStorage.removeItem('tokenChek');
    this._router.navigate(['/login'])
  }
// -------login code close

}
