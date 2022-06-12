import {Person} from "./person";

class Student extends Person {
    studentId: number


    constructor(firstname: string, lastname: string, studentId: number) {
        super(firstname, lastname);

        this.studentId = studentId;
    }


}