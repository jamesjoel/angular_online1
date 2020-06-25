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
  index:number;
  constructor(private _userService : UsersService) {
    this._userService.getUsers().subscribe(res=>{
      // this.allUser.push(res);
      this.allUser=res;
    });
   }

  ngOnInit(): void {
    
  }
  add(){
    if(this.newUser.id)
    {
      this._userService.updateUser(this.newUser).subscribe(res=>{
        this.allUser[this.index]=res;
        this.clearData();

      })
    }
    else{
      this._userService.saveUser(this.newUser).subscribe(res=>{
        // console.log(res);
        this.allUser.push(res);
        this.clearData();
      });
    }
    
  }
  delete(obj){
    this._userService.deleteUser(obj).subscribe(res=>{
        let n = this.allUser.indexOf(obj);
        this.allUser.splice(n, 1);
        this.clearData();
    });
  }
  askEdit(obj, n){
    // this.newUser = obj;
    this.newUser = {... obj};
    this.index = n;
  }
  clearData(){
    this.newUser={
      name : "",
      city : ""
    }
  }

}
