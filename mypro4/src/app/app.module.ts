import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
// import { HelloDirective } from './direcitves/hello.directive';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    TeacherModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*  
      Feature Module
      1. create module (ng g m <student> --routing=true)
        [this cmd create a student/module file and create its routing file]
      2. create component for that module (ng g c <student>)
        [this cmd create componet for that perticular module, so total file inside of module wil be
          i. student.module.ts
          ii. student-routing.module.ts
          iii. student.compoent.ts
          iv. student.compoent.spec.ts
          v. student.compoent.html
          vi. student.compoent.scss
        ]
      3. import student.module.ts file in app.module.ts and entry inside of "imports" array
      4. create student.module.ts "path" inside of app-routing.module.ts file (lazy loading)
      5. make own routing for student 
        [
          path : "",
          component : studentcomponet,
          children :[
            {
              path : "",
              compoent : any page level compoent
            }
          ]
        ]
        6. enrty inside of bootstrap array in student.module
        7. make <router-outlet></router-outlet> in student.compont.html file
        
      







*/