import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  {
    path : "", // localhost:4200/teacher/
    component : TeacherComponent,
    children :[
      {
        path : "",
        component : HomeComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class TeacherRoutingModule { }
