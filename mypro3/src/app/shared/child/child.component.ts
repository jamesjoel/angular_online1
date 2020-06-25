import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() childEvent = new EventEmitter;
  // @Output() childEvent2 = new EventEmitter;

  name:string;
  constructor() { }

  ngOnInit(): void {
  }
  demo(){
    this.childEvent.emit(this.name);
  }

}
