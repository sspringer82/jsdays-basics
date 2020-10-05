import Person from './person';
import { Ageable as ThingsWithAge, User } from './user';

const klaus: ThingsWithAge = new User('Klaus', 'Müller', 42);
console.log(klaus.age);
console.log(klaus.getFullName());

const lisa: Person = new Person('Lisa', 'Simpson', 12);
lisa.greet();


// modulsysteme:
// - CommonJS: require + module.exports
// - AMD: require + define
// - ES6: import + export