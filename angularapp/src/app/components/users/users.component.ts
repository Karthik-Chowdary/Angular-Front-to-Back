import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/User.service'
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
  @ViewChild('userForm') form: any; 

  constructor(private userservice: UserService) { }

  ngOnInit() {
    
      this.userservice.getUsers().subscribe(users => {
        this.users = users;
        this.loaded = true;
      })
      
    
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

    onSubmit({value, valid}: {value: User, valid: Boolean}){
      if(!valid){
        console.log("Form is not valid");
      }
      else{
        value.isActive = true;
        value.registered = new Date();
        value.hide = true;
        this.userservice.addUser(value);
        this.form.reset();
      }
    }
}
