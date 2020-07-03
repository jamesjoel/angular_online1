import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [TeacherComponent, HomeComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  bootstrap : [TeacherComponent]
})
export class TeacherModule { }
