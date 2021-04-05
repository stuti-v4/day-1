import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
 
 totalCaseUrl="https://api.covid19api.com/world/total";
 private casesUrl='';
 public selectCountry= "";

 constructor( private http:HttpClient)
 {
 }

 getTotalData()
 {
   return this.http.get(this.totalCaseUrl);
 }
  private Details:any[] = [];
 
    addUser(details: FormGroup) {
        this.Details.push(details);
    }
 
    getUser() {
        return this.Details;
    }
}
