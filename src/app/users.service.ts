import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  addUser(userArray)
  {
    let users=[];
    if(localStorage.getItem('Users'))
    {
      users=JSON.parse(localStorage.getItem('Users'));
      users=[userArray, ...users];
    }
    else{
      users=[userArray];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }
}
