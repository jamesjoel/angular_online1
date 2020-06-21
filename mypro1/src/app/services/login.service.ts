import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private _http : HttpClient) {
    // console.log(environment);
   }

  doLogin(obj){
    return this._http.post<any>("http://localhost/angular_ci/index.php/api/login", obj);
  }

}
