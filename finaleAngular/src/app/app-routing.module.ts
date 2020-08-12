import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { EditteacherComponent } from './pages/editteacher/editteacher.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "teacher",
    component : TeacherComponent
  },
  {
    path : "teacher/edit/:id",
    component : EditteacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
