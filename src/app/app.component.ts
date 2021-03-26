import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  isUserVisible=false;
  userName='';
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
