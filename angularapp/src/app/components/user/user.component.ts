import { Component } from "@angular/core"

@Component({
    selector : 'app-user',
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css']
})



export class UserComponent{
    //Properties
    firstName : String;
    lastName : String;
    age : Number;
    address;
    foo : any;
    hasKids : Boolean;
    numberArray : number[];
    stringArray : string[];
    mixedArray : any[];
    myTuple : [number, string, boolean];
    unusable : void;
    u : undefined;
    n : null;

    //Methods
    constructor(){
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.age = 30;
        this.address = {
            street : '730 Riddle Rd',
            city : 'Cincinnati',
            state : 'Ohio'
        }
        this.foo = 1;
        this.hasKids = true;
        this.numberArray = [1, 2, 3];
        this.stringArray = ['Hello', 'World'];
        this.mixedArray = [1, 'Hello', true];
        this.myTuple = [1, 'Ssup', true];
        this.unusable = undefined;
        this.u = undefined;
        this.n = null;
        console.log(this.addNumbers(2, 3));
    }
    addNumbers(num1:number, num2:number): number{
        return num1+num2;
    }
}
