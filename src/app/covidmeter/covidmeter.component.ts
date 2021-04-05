import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-covidmeter',
  templateUrl: './covidmeter.component.html',
  styleUrls: ['./covidmeter.component.css']
})
export class CovidmeterComponent implements OnInit {
  totalData:any=[];
  constructor( private user:UsersService) 
  { 
    this.user.getTotalData().subscribe(data=>{
      console.warn(data)
      this.totalData=data
    })
  }

  ngOnInit(): void 
  {}
}
