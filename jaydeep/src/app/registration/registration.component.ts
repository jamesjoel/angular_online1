import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Match, ContactNumber } from '../helpers/passwordMatchValideters';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regiForm:FormGroup;
  checkSubmitMy:boolean = false;

  constructor( private _fb:FormBuilder) {

    this.regiForm = this._fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required],
      repassword:['', Validators.required],
      number:['', Validators.required]
    },
{
  validators:[ Match('password','repassword'), ContactNumber('number')] // html formControlNames
  
});
}
  
  ngOnInit(): void {
  }

  save(){
    this.checkSubmitMy = true;
    if(this.regiForm.invalid){
      return;
    }
    console.log(this.regiForm.value);
  }

}


/*  
  FormBuilder ----- IS A SERVICE
  FormGroup ------- IS A INTERFACE
  Validators -------- IS A CLASS WHICH CAN HOLD validation METHODS
*/