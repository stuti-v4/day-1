import { Component,VERSION, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})

export class UseraddComponent implements OnInit {

  constructor() { }
  nameOfUser = "";
  ngOnInit(): void {
  }
  
}
