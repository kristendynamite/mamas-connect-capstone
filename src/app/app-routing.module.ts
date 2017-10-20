import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'app',
    loadChildren: './root/root.module#RootModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
