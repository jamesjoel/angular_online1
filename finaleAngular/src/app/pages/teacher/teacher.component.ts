import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teachers : any;
  teacher:any;
  constructor(private _teacher : TeacherService) { }

  ngOnInit() {
    this._teacher.getAll().subscribe(res=>{
      this.teachers = res;
    })
  }
  askDelete(obj){
    this.teacher = obj;
  }
  delete(){
    this._teacher.delete(this.teacher).subscribe(res=>{
      // console.log(res);
      if(res){
        let n = this.teachers.indexOf(this.teacher);
        this.teachers.splice(n, 1);
      }
    })
    // console.log(this.teacher);
  }
}
