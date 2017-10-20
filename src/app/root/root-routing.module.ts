import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    // loadChildren: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RootRoutingModule { }
