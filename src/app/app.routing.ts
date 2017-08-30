import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
