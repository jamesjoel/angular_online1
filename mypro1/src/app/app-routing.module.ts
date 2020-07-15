import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StudentComponent } from './pages/student/student.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { InfoComponent } from './pages/info/info.component';
import { SliderComponent } from './pages/slider/slider.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "employee",
    component : EmployeeComponent
  },
  {
    path : "users",
    component : UsersComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "signup",
    component : SignupComponent
  },
  {
    path : "dashboard",
    component : DashboardComponent,
    canActivate : [AuthGuard]
    
  },
  {
    path : "profile",
    component : ProfileComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "teacher",
    component : TeacherComponent
  },
  {
    path : "teacher/info/:id/:name",
    component : InfoComponent
  },
  {
    path : "slider",
    component : SliderComponent 
  },
  {
    path : "product",
    component : ProductComponent
  },
  {
    path : "product/:id",
    component : ProductComponent
  },
  {
    path : "**",
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
