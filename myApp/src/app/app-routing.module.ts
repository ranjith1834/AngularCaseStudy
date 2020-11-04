import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth.guard';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [  
  { path:"", component:LoginComponent },
  { path:"login", pathMatch:"full", redirectTo:"" },
  { path:"home", component:HomeComponent, canActivate:[AuthGuard] },
  { path:"employees", component:EmployeeListComponent, canActivate:[AuthGuard] },
  { path:"employee/:id", component: EmployeeComponent, canActivate:[AuthGuard]},
  { path:"employee", component: EmployeeComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
