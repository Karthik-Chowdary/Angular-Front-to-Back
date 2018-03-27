import { Component, OnInit } from "@angular/core"

import { User } from "../../models/user"

@Component({
    selector : 'app-user',
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css']
})



export class UserComponent{
    //Properties
    user: User;
    //Methods
    constructor(){
        
    }

    ngOnInit(){
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com'

        }
    }
    
}


