
import { Component, OnInit } from '@angular/core';
// After import ReactiveFormModules in our module
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Match, contactCheck } from '../../helpers/passwordmatch.validator';

/*  
  FormBuilder ----- IS A SERVICE
  FormGroup ------- IS A INTERFACE
  Validators -------- IS A CLASS WHICH CAN HOLD validation METHODS

*/

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  signupFrm:FormGroup;
  checkSubmit:boolean = false;
  
  constructor(private _fb : FormBuilder) {
    this.signupFrm = this._fb.group({
      fullName : ["", Validators.required],
      username : ["", [Validators.required, Validators.email]],
      city : ["", Validators.required],
      password: ["", Validators.required],
      repassword: ["", Validators.required],
      contact : ["", Validators.required]  
     },
     {
       validator : [Match('password', 'repassword'), contactCheck('contact')] // Password FormControlName to the custome function
     }
     
     
     
     )



   }

  ngOnInit(): void {
  }
  save(){
    
    this.checkSubmit=true;
    if(this.signupFrm.invalid){
      return;
    }
    console.log(this.signupFrm.value);
    // call service for API saving data to the server
  }

}
