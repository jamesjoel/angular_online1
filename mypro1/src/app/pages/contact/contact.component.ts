import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
a:number;
b:number;
ans:string;
  constructor(private _demo : DemoService) { 

  }

  ngOnInit(): void {
  }

  btnClick(){
    // this.ans=this._demo.sum(this.a, this.b);
    
    
  }

}
