import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _http : HttpClient) { }

  ngOnInit() {
  }
  demo(){
    this._http.get<any>("http://localhost/angular_ci/index.php/api/getuser", {
      headers : { 'Authorization' : "Demo" }
    }).subscribe(res=>{
      console.log(res);
    })
  }

}
