import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http : HttpClient) { }


  getUsers(){
    // this._http.get("http://localhost/ang_server/student.php").subscribe(res=>{
    //   console.log(res);
    // })
    return this._http.get<any>("http://localhost/ang_server/student.php");
  }
  saveUser(obj){
    return this._http.post<any>("http://localhost/ang_server/student.php", obj);
  }
}
