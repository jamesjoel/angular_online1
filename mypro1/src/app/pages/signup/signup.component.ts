import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      username : ["", [Validators.required, Validators.email]]
      
    })



   }

  ngOnInit(): void {
  }
  save(){
    // this.signupFrm.setValue({"hidden1": "jaydeep"});
    // this.signupFrm.value();
    this.checkSubmit=true;
    if(this.signupFrm.invalid){
      return;
    }
    console.log(this.signupFrm.value);
    // call service for API saving data to the server
  }

}
