import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.interface';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  emp:Employee={
    name : "",
    city :"",
    salary : null
  };
  empData:Employee[]=[
    {
      id : 1,
      name : "rohit",
      city : "indore",
      salary : 5000
    },
    {
      id : 2,
      name : "james",
      city : "ujjain",
      salary : 6000
    },
    {
      id : 3,
      name : "nilesh",
      city : "bhopal",
      salary : 7000
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  askAdd(){
    this.emp={
      name : "",
      city :"",
      salary : null
    };
  }
  add(data:Employee){
     if(data.id){
      for(let i = 0; i<=this.empData.length; i++)
      {
        if(data.id == this.empData[i].id)
        {
          this.empData[i]=data;
          break;
        }
      }
    }
    else{
      this.empData.push(data);
      
    }
  }
  askDelete(emp:Employee){
    // console.log(emp);
    this.emp = emp;
  }
  delete(){
    
    let n = this.empData.indexOf(this.emp);
    this.empData.splice(n, 1);
  }
  askEdit(emp:Employee){
    // this.emp=emp;
    this.emp = {...emp};
    // angular.copy(source, desti)
  }
}
