import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashComponent } from './pages/dash/dash.component';


@NgModule({
  declarations: [AdminComponent, DashComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  bootstrap : [AdminComponent]
})
export class AdminModule { }
