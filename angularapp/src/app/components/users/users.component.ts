import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : User[];
  showExtended : Boolean = true;
  loaded : Boolean = false;
  enableAdd : Boolean = true;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
          street : '121 main st',
          city : 'New York',
          state : 'NY'
          },
          image: 'http://lorempixel.com/600/600/people/3'
      },
      {
        firstName: 'Karthik',
        lastName: 'Chowdary',
        age: 21,
        address: {
        street : '730 Riddle Rd',
        city : 'Cincinnati',
        state : 'OH'
            },
            image: 'http://lorempixel.com/600/600/people/2'
        },
    {
      firstName: 'Rashmitha',
      lastName: 'Reddy',
      age: 22,
      address: {
      street : '6545 Montezuma Rd',
      city : 'San Diego',
      state : 'CA'
          },
          image: 'http://lorempixel.com/600/600/people/1'
      }
      ]
      this.loaded = true;
    
    this.addUser({
        firstName: 'Aditya',
        lastName: 'Chava',
        age: 21,
        address: {
        street : '2357 Champions Court',
        city : 'Raleigh',
        state : 'NC'
        },
        image: 'http://lorempixel.com/600/600/people/4'
    });
  }

  addUser(user: User){
    this.users.push(user);
  }

}
