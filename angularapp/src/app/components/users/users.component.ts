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
  currentClasses: {}
  currentStyles: {}

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
          // image: 'http://lorempixel.com/600/600/people/3',
          isActive: true,
          // balance: 100,
          registered: new Date('01/02/2018 06:20:00')
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
            // image: 'http://lorempixel.com/600/600/people/2',
            isActive: false,
            // balance: 100,
          registered: new Date('01/02/2018 06:20:00')
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
          // image: 'http://lorempixel.com/600/600/people/1',
          isActive: true,
          // balance: 75,
          registered: new Date('01/11/2016 12:20:00')
      }
      ]
      this.loaded = true;
    
    // this.addUser({
    //     firstName: 'Aditya',
    //     lastName: 'Chava',
    //     age: 21,
    //     address: {
    //     street : '2357 Champions Court',
    //     city : 'Raleigh',
    //     state : 'NC'
    //     },
    //     image: 'http://lorempixel.com/600/600/people/4',
    //     isActive: false,
    //     balance: 200,
    //       registered: new Date('01/02/2017 04:20:00')
    // });

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User){
    this.users.push(user);
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended

  }

}

    setCurrentStyles(){
      this.currentStyles = {
        'padding-top': this.showExtended ? '0' : '40px',
        'font-size' : this.showExtended ? '' : '40px'
      }
    } 
}
