import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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

import { HttptokenInterceptor } from './interceptor/httptoken.interceptor';
import { SignupComponent } from './pages/signup/signup.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { BonusePipe } from './pipes/bonuse.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { AgePipe } from './pipes/age.pipe';
import { MydirDirective } from './directives/mydir.directive';
import { InfoComponent } from './pages/info/info.component';
import { SliderComponent } from './pages/slider/slider.component';

import { NgImageSliderModule } from 'ng-image-slider';
import { DpDatePickerModule } from 'ng2-date-picker';
import { ProductComponent } from './pages/product/product.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


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
    TeacherComponent,
    BonusePipe,
    GenderPipe,
    AgePipe,
    MydirDirective,
    InfoComponent,
    SliderComponent,
    ProductComponent,
    ProductInfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    DpDatePickerModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttptokenInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
1. Installation and Create
2. Component (Feature Comp/Shared Comp)
3. Data Passing bw Compoent 
  a. @Input
  b. @ouput
  c. @childView *
4. Routing 
5. Child Routing *
6. Modules *
7. CRUD 
8. Services
9. HttpClientModuel/HttpClient -- Service
10. Authentication (Token)
11. Guard
12. Interceptor
13. ReactiveFormsModuels
14. Pipes *
15. File Upload *
17. Build a Project *
18. Direvices *
*/
