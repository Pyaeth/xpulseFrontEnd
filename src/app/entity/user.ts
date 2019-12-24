export class User {
    id:number;
    username:string;
    password:string;
    firstname:string;
    lastname:string;
    role:string;

    constructor(id:number,
        username:string,
        password:string,
        firstname:string,
        lastname:string,
        role:string) {
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.username = username;
            this.password = password;
        }
}