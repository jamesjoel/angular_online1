import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
 
  gender:string="";
  check:boolean=true;

  allData:any[]=[];

  // allData=[];

  obj:Student = {
    name : "",
    age : null,
    city : ""
    
  }


  data:Student[] = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "gaurav",
      age : 22,
      city : "mhow"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.data.push(this.obj);
    this.obj={
      name : "",
      age : null,
      city : ""
    }
    
  }

}


/*
var city:string="indore";

interface myObj{
  name? : string;
  age? : number;
  demo? : any;
}

var test:myObj;


---------------> Define Your Datatype of an Object
var obj:myObj = { name : "rohit", age : 25, demo : "sdfgsdgsdfgsdfg"};

var json:myObj[] = [
  {
    name : "james",
    age : 30
  },
  {
    name : "james",
    age : 30
  },
  {
    name : "james",
    age : 30
  }
]





*/
