import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _loginServ : LoginService, private _router : Router){

  }

  canActivate(){
    if(this._loginServ.isLoggedIn())
    {
      return true;
    }
    else{
      this._router.navigate(["/login"]);
      return false;
    }
  }
  
}
