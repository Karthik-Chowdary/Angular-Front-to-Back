import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user : User = {
          firstName: '',
          lastName: '',
          email: ''
  }
  users : User[];
  showExtended : Boolean = true;
  loaded : Boolean = false;
  enableAdd : Boolean = true;
  currentClasses: {}
  currentStyles: {}
  showUserForm: Boolean = false;

  constructor() { }

  ngOnInit() {
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

  // addUser(){
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //         lastName: '',
  //         email: ''
  //   }
  // }

  // toggleHide(user: User){
  //   user.hide = !user.hide;
  // }

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

    onSubmit(){
      
    }
}
