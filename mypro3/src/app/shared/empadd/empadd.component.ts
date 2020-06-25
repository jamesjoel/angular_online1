import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.interface';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.scss']
})
export class EmpaddComponent implements OnInit {
  @Output() sendToParent = new EventEmitter;
  @Input() newEmp:Employee;
  

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.sendToParent.emit(this.newEmp);
  }

}
