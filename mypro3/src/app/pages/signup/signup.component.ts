import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Match } from '../../helpers/match.validator';
import { UserService } from '../../services/user.service';


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
      validator : [Match('password', 'rePassword')]
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

  
  
}
