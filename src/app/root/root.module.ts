import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootRoutingModule } from './root-routing.module';

//COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { RootComponent } from './components/root/root.component';

@NgModule({
  imports: [
    CommonModule,
    RootRoutingModule
  ],
  declarations: [ HeaderComponent, RootComponent ]
})
export class RootModule { }
