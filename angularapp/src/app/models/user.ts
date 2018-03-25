export interface User {
    firstName : String,
    lastName : String,
    age?: Number,
    address?: {
        street? : String,
        city? : String,
        state? : String
       },
    image?: String,
    isActive?: Boolean,
    balance?: number,
    registered?: any 
}