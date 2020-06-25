import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _userServ : UserService) {
    this._userServ.getUserInfo().subscribe(res=>{
      console.log(res);
    })
   }

  ngOnInit(): void {
  }

}
