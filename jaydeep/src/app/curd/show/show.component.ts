import { Component, OnInit } from '@angular/core';
import {CurdService} from '../../services/curd.service';
import { Curd } from '../../modal/curd.interface';
 
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  allData:Curd[];
  
  index:number;

  searchText:any;

  constructor( private curdSer:CurdService) { }

  ngOnInit(): void {

    this.curdSer.show().subscribe(res =>{
      this.allData = res;
      // console.log(this.allData);
    })
  }


  delete(obj){
    console.log('---------------delete');
    this.curdSer.deleteUser(obj).subscribe(res=>{
        let n = this.allData.indexOf(obj);
        this.allData.splice(n, 1);
        //this.clearData();
    });
  }



}
