import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';


@Component({
  selector: 'app-editteacher',
  templateUrl: './editteacher.component.html',
  styleUrls: ['./editteacher.component.scss']
})
export class EditteacherComponent implements OnInit {

  teacher:any={
    _id : "",
    name : "",
    age : null,
    city : ""
  }
  constructor(
      private _actRoute : ActivatedRoute, 
      private _teacher : TeacherService,
      private _router : Router
      ) {
    _actRoute.paramMap.subscribe(params=>{
      // console.log(params);
      let id = params.get("id");
      _teacher.getTeacher(id).subscribe(res=>{
        // console.log(res);
        this.teacher = res;
      })
    })
   }

  ngOnInit() {
  }
  update(){
    // alert();
    this._teacher.update(this.teacher).subscribe(res=>{
      if(res){
        this._router.navigate(["/teacher"]);
      }
      // console.log(res);
    })
  }

}
