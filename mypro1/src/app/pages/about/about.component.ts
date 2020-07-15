import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  y:string;
  name:string="rohit";
  path:string="image.jpg";
  colorName:string="blue";
  constructor() { }

  ngOnInit(): void {
  }
  test(x){
    console.log(x);
    this.y = x;
  }

}
