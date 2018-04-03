import { Injectable } from '@angular/core';
import { User } from '../models/User'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

@Injectable()
export class DataServiceService {
  users: User[];
  data: Observable<any>

  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        // image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        // balance: 100,
        registered: new Date('01/02/2018 06:20:00'),
        hide: true
    },
    {
      firstName: 'Karthik',
      lastName: 'Chowdary',
      email: 'svskc@yahoo.com',
          // image: 'http://lorempixel.com/600/600/people/2',
          isActive: false,
          // balance: 100,
        registered: new Date('01/02/2018 06:20:00'),
        hide: true
      },
  {
    firstName: 'Rashmitha',
    lastName: 'Reddy',
    email: 'rash@outlook.com',
        // image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        // balance: 75,
        registered: new Date('01/11/2016 12:20:00'),
        hide: true
    }
    ];
  }

  getUsers() : Observable<User[]>{
    return of(this.users);
  }

  addUser(user: User){
    this.users.unshift(user);
  }
}
