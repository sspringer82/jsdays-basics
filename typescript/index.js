"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
const user_1 = require("./user");
const klaus = new user_1.User('Klaus', 'Müller', 42);
console.log(klaus.age);
console.log(klaus.getFullName());
const lisa = new person_1.default('Lisa', 'Simpson', 12);
lisa.greet();
// modulsysteme:
// - CommonJS: require + module.exports
// - AMD: require + define
// - ES6: import + export
