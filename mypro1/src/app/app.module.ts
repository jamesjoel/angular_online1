import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



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
    EmpdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
