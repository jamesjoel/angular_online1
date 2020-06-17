import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users.interface';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  allUser:Users[];
  newUser:Users={
    name : "",
    city : ""
  }
  constructor(private _userService : UsersService) {
    this._userService.getUsers().subscribe(res=>{
      // this.allUser.push(res);
      this.allUser=res;
    });
   }

  ngOnInit(): void {
    
  }
  add(){
    this._userService.saveUser(this.newUser).subscribe(res=>{
      // console.log(res);
      this.allUser.push(res);
      this.newUser={
        name : "",
        city : ""
      }
    });
  }

}
