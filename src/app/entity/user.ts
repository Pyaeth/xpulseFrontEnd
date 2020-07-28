import { Preferences } from './preferences';

export class User {
    id:number;
    username:string;
    password:string;
    firstname:string;
    lastname:string;
    role:string;
    preferences: Preferences;

    constructor(id:number,
        username:string,
        password:string,
        firstname:string,
        lastname:string,
        role:string,
        preferences: Preferences) {
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.username = username;
            this.password = password;
            this.role = role;
            this.preferences = preferences;
        }
}