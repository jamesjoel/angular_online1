import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from "../../services/employee.service";
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  emp:any=[];
  // constructor(private _empServ : EmployeeService) {
  //   this._empServ.getTeachers().subscribe(res=>{
  //     this.emp = res;
  //   })

  //  }
  constructor(private _http: HttpClient){
    this._http.get("http://localhost:3000/api/teacher").subscribe(res=>{
      this.emp = res;
    })
  }

  ngOnInit(): void {
  }


}
