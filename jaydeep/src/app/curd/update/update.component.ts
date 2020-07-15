import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CurdService } from 'src/app/services/curd.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // index:number;
  UpdateData:any;

  constructor( private actRouter: ActivatedRoute, private curdSer:CurdService ) { 

    actRouter.paramMap.subscribe(res =>{

      // console.log(res);
      let id = res.get('id');
      // console.log(id);


      this.curdSer.edit(id).subscribe(res =>{
        this.UpdateData = res;
        console.log(this.UpdateData);
        
    })
  })
}

  ngOnInit(): void {
  }

  //askEdit(obj, n){
    // this.newUser = obj;
    //this.newUser = {... obj};
    //this.index = n;
  //}

}
