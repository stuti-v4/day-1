import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class UsersService {
 
  private Details:any[] = [];
 
    addUser(details: FormGroup) {
        this.Details.push(details);
    }
 
    getUser() {
        return this.Details;
    }
}
