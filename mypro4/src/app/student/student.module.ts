import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { HomeComponent } from './pages/home/home.component';
import { HelpComponent } from './pages/help/help.component';
import { HelloDirective } from '../direcitves/hello.directive';


@NgModule({
  declarations: [
      StudentComponent, 
      HomeComponent, 
      HelpComponent,
      HelloDirective
    ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  bootstrap : [StudentComponent]
})
export class StudentModule { }
