import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mypro1';

  constructor(private _http : HttpClient){

  }
  fetch(){
    this._http.get<any>("http://localhost:3000/api/hello").subscribe(res=>{
      console.log(res);
    })
  }


}
