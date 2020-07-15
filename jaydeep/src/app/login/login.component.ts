import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
 
interface User{
  username:string;
  password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user:User={
    username:'',
    password:''
  };
  errorMsg:string;

  constructor(private _loginServ : LoginService, private _router : Router) { }

  ngOnInit(): void {
  }

  login(){
    this._loginServ.doLogin(this.user).subscribe(res=>{
      console.log(res);
      localStorage.setItem('tokenChek', res.token);
      //console.log()
      this._router.navigate(['/dashboard']);
    },
    err=>{
      console.log('--------', err.error);

      if(err.error.msgType ==1){
        this.errorMsg="this username and password is Incorrect";
      }
      if(err.error.msgType==2){
        
        this.errorMsg="this password is Incorrect";
      }
    })
  }

}









