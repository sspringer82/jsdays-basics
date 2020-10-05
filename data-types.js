// primitive Types - by value
const number = 4;
const string = 'Hallo "Welt"';
const string2 = "Hallo 'Welt'";
const string3 = `Hallo Welt`; // template strings
const boolean = true;
const nullType = null; // kein Wert - Entwickler
const undefinedType = undefined; // nicht definiert - Engine
const symbol = Symbol('firstname'); // tbd

// composite Types - by reference
const agekey = 'age';
const firstnamekey = 'firstname';
const object = {
  [symbol]: 'Peter',
  firstname: 'Klaus',
  lastname: 'Müller',
  [agekey]: 42, // variable eigenschaft - age: 42
  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }
};
console.log(object.firstname);
console.log(object.getFullname());
console.log(object.age);
console.log(object[firstnamekey]);
const object2 = new Object();
const array = [];
const array2 = [1, 2, 'hallo', true];

console.log(
  (new Array(4))
    .fill('JavaScript')
    .map(item => item.toUpperCase()
  ).join(' - ')
);
