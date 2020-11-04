import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginApiService } from './login/login-api.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeListApiService } from './employee-list/employee-list.service';
import { HyperlinkComponent } from './hyperlink/hyperlink.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeComponent,
    NavBarComponent,
    HyperlinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [LoginApiService, EmployeeListApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
