import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

//COMPONENTS
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [ LoginComponent, AboutComponent, SignupComponent, WelcomeComponent ]
})
export class HomeModule { }
