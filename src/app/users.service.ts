import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class UsersService {
 
 constructor( private http:HttpClient)
 {
 }

 getTotalData()
 {
   let url="https://api.covid19api.com/world/total";
   return this.http.get(url);
 }
  private Details:any[] = [];
 
    addUser(details: FormGroup) {
        this.Details.push(details);
    }
 
    getUser() {
        return this.Details;
    }
}
