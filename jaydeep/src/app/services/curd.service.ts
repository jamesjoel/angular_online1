import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CurdService {

  constructor(private _http : HttpClient) { }

  show(){
    return this._http.get<any>("http://localhost/serverAPI/curd.php");
  }
  
  insertData(obj){
    return this._http.post<any>("http://localhost/serverAPI/curd.php", obj);
  }

  deleteUser(obj){
    return this._http.delete<any>("http://localhost/serverAPI/curd.php?id="+obj.id);
  
  }

  updateUser(obj){
    return this._http.put<any>("http://localhost/serverAPI/curd.php?id="+obj.id, obj);
  }

  edit(id){
    return this._http.get<any>("http://localhost/serverAPI/curdEdit.php?id="+id);
  }




}
