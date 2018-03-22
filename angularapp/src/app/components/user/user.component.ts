import { Component } from "@angular/core"

@Component({
    selector : 'app-user',
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css']
})

export class UserComponent{
    //Properties
    firstName = 'John';
    lastName = 'Doe';
    age = 30;
    address = {
        street : '730 Riddle Rd',
        city : 'Cincinnati',
        state : 'Ohio'
    };

    //Methods
    constructor(){
        this.sayHello();
        console.log(this.age);
        this.hasBirthday();
        console.log(this.age);
    }

    sayHello(){
        console.log(`Hello ${this.firstName}`);
    }

    hasBirthday(){
        this.age += 1;
    }
}

