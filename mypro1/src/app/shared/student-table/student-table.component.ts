import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; 
import { Student } from '../../models/student.interface';


@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  @Input() allStudent:Student;

  constructor() { }

  ngOnInit(): void {
  }

}
/*
name:string = "rohit";
pincode:number = 454545;

interface Emp{
  name : string;
  salary : number;
  city? : string;
  age? : any;
}


emp:Emp = {
  name : "rohit",
  salary : 5000
}

data:Emp[] = [
  {
    name : "gaurav",
    salary : 2500,
    age : 25
  }
]















*/
