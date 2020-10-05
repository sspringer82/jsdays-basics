"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    setAge(age) {
        // this.age = age as any as number; // any cast
        this.age = age;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}
exports.User = User;
