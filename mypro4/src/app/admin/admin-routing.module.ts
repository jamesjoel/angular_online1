import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashComponent } from './pages/dash/dash.component';


const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "dash",
        component : DashComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
