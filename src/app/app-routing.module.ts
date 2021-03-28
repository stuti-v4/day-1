import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UseraddComponent } from './useradd/useradd.component';

const routes: Routes=[
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:'useradd',
    component:UseraddComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,UseraddComponent,];