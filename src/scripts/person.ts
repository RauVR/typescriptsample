export class Person {
    firstname: string
    lastname: string

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }


    fullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }
}