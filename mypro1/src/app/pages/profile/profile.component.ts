import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:any;

  constructor(private _userServ : UserService) {
    this._userServ.getUserInfo().subscribe(res=>{
      console.log(res);
      this.user=res;
    }, err=>{
      if(err){

      }
    })
   }

  ngOnInit(): void {
  }
  demo(){
    this._userServ.demo().subscribe(res=>{
      console.log(res);
    })
  }

}
