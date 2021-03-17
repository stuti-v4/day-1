import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  ngHome=true;
  ngUser=false;
  Home()
  {
    this.ngHome=true;
    this.ngUser=false;
    console.log('Home');
  }
  User()
  {
    this.ngUser=true;
    this.ngHome=false;
    console.log('AddUser');
  }
}
