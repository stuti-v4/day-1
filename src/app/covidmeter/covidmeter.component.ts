import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-covidmeter',
  templateUrl: './covidmeter.component.html',
  styleUrls: ['./covidmeter.component.css']
})
export class CovidmeterComponent implements OnInit {
  data:any;
  constructor( private user:UsersService) 
  { 
  
  }

  ngOnInit(): void 
  {
    this.user.getTotalData().subscribe((result)=>{
      console.warn("result",result )
      this.data=result
    })
  }
}
