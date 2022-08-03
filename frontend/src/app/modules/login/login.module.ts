import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AdmindashboardComponent } from '../admindashboard/components/admindashboard/admindashboard.component';
import { UserdashboardComponent } from '../userdashboard/components/userdashboard/userdashboard.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
