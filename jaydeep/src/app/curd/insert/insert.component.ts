import { Component, OnInit } from '@angular/core';
import { Curd } from '../../modal/curd.interface';
import {CurdService} from '../../services/curd.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  newUser:Curd={

    fullname : "",
    lastname : "",
    email : "",
    password : "",
    mobile : "",
    gender : "",
    city : ""
  }
  index:any;

  constructor( private curdSer:CurdService) { }

  ngOnInit(): void {}

  add(){
    console.log(this.newUser);
    this.curdSer.insertData(this.newUser).subscribe(res=>{
    });
    this.clearData();
    this.index = 'Data Saved successfully';
  }


  clearData(){
    this.newUser={
      fullname : "",
      lastname : "",
      email : "",
      password : "",
      mobile : "",
      gender : "",
      city : ""
    }
  }
}
