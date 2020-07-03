import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent  } from './student.component';
import { HomeComponent } from './pages/home/home.component';
import { HelpComponent } from './pages/help/help.component';

const routes: Routes = [
  {
    path : "",
    component : StudentComponent,
    children :[
      {
        path : "",
        component : HomeComponent
      },
      {
        path : "help",
        component : HelpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
