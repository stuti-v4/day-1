import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {

  constructor() { }
  isUserVisible=false;
  userName='';
  ngOnInit(): void {
  }
  displayName(currname)
  {
    this.userName=currname.target.value;
  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    gender: new FormControl('')
  });

}
