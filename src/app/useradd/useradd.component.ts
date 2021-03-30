import { Component,VERSION, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})

export class UseraddComponent implements OnInit {
  
  constructor( private userService :UsersService) { }
  nameOfUser = "";
  user:any={};
  ngOnInit(): void 
  {}
  
   profileForm = new FormGroup({
    inputName: new FormControl,
    inputEmail: new FormControl("", Validators.required),
    inputPhone: new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9 ]{10}")
    ]),
    inputAddress: new FormControl
  });

  onSubmit()
  {
      console.warn(this.profileForm.value);
      this.user=Object.assign(this.user,this.profileForm.value);
      this.userService.addUser(this.user);
  }
}
imports: [
        FormsModule,
        ReactiveFormsModule
]