import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';

import { ShowComponent } from './curd/show/show.component';
import { InsertComponent } from './curd/insert/insert.component';
import { UpdateComponent } from './curd/update/update.component';
import { FileuploadComponent } from './fileupload/fileupload.component';


// -------login code
import { AuthGuard } from './guard/auth.guard';
// -------login code

const routes: Routes = [

  { path:'home', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'regi', component:RegistrationComponent },
  { path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard] },
  
  { path:'show', component: ShowComponent},
  { path:'insert', component: InsertComponent},
  { path:'update/:id', component: UpdateComponent},
  { path:'upload', component: FileuploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
