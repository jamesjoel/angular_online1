import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.interface';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empdelete',
  templateUrl: './empdelete.component.html',
  styleUrls: ['./empdelete.component.scss']
})
export class EmpdeleteComponent implements OnInit {
  @Input() emp:Employee;
  @Output() deleteToParent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.deleteToParent.emit(this.emp);
  }

}
