import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StudentTableComponent } from './shared/student-table/student-table.component';
import { StudentComponent } from './pages/student/student.component';
import { ChildComponent } from './shared/child/child.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmpaddComponent } from './shared/empadd/empadd.component';
import { EmpdeleteComponent } from './shared/empdelete/empdelete.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';


import { TokenInterceptor } from './token.interceptor';
import { SignupComponent } from './pages/signup/signup.component';
import { HelloDirective } from './directives/hello.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StudentTableComponent,
    StudentComponent,
    ChildComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    EmpaddComponent,
    EmpdeleteComponent,
    UsersComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    SignupComponent,
    HelloDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
