import { Component, VERSION } from '@angular/core';

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
}
