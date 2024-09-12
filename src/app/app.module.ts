import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { UseraddComponent } from './useradd/useradd.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { UsersService } from './users.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,  FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent, UseraddComponent, ShowuserComponent ,routingComponents],
  providers: [UsersService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { 
}
