"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
class Person extends user_1.User {
    constructor(f, l, a) {
        console.log('Hello new Person');
        super(f, l, a);
    }
    greet() {
        console.log(`Hello ${this.getFullName()}`);
    }
}
exports.default = Person;
