import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  teacher:any;

  constructor(private _actRoute : ActivatedRoute, private _http : HttpClient) {
    _actRoute.paramMap.subscribe(parameter=>{
      // console.log(param);
      let id = parameter.get('id');
      // let name = parameter.get('name');
      _http.get("http://localhost:3000/api/teacher/"+id).subscribe(res=>{
      // console.log(res);
      this.teacher = res;
      });
      
    });
   }

  ngOnInit(): void {
  }

}
