import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : "",
    loadChildren : "./user/user.module#UserModule" // Lazy Loading
  },
  {
    path : "admin",
    loadChildren : "./admin/admin.module#AdminModule"
  },
  {
    path : "teacher",
    loadChildren : "./teacher/teacher.module#TeacherModule"
  },
  {
    path : "stu",
    loadChildren : "./student/student.module#StudentModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
