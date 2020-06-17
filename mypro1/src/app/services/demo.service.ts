import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private _http : HttpClient) { }


  sum(a:number, b:number){
    return a+b;
  }
  hello(){
    // this._http.get("http://localhost/project/teacher").subscribe(function(data){


    // })

    

  }
}
