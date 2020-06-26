import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Match } from '../../helpers/match.validator';
// import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { resolve } from 'dns';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user:FormGroup;
  check:boolean=false;
  constructor(private _fb : FormBuilder, public _userServ : UserService) {
    this.user = this._fb.group({
      fName :  ["", Validators.required],
      username: ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      rePassword : ["", Validators.required],
      city : ["", Validators.required],
      contact : ["", Validators.required]
    },
    {
      validator : [Match('password', 'rePassword'), this.checkUsername(this.user.controls.username)]
    }
    )
   }

  ngOnInit(): void {
  }

  submit(){
    this.check=true;
    if(this.user.invalid){
      return false;
    }
    
    console.log(this.user.value);
  }

  checkUsername(user:AbstractControl){
    return new Promise(resolve=>{
      if(user.errors && !user.errors.emailError){
        return;
      }
      setTimeout(() => {
        this._userServ.checkUser({username : user.value}).subscribe(res=>{
          if(res.msg==1){
            user.setErrors({"emailError":true});
            resolve();
          }
          else{
            user.setErrors(null);
            resolve();
          }
        })
      }, 1000);
    })
  }
}
