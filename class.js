'use strict';
// Alte Welt mit Prototypen

// function User(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }

// User.prototype.getFullname = function() {
//   return this.firstname + ' ' + this.lastname;
// }

// const klaus = new User('Klaus', 'Müller');
// console.log(klaus.getFullname());

class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}

const klaus = new User('Klaus', 'Müller');
klaus.age = 42;

User.prototype.isOld = function() { // Klasse zur Laufzeit erweitern
  if(this.age > 80) {
    return true;
  }
  return false;
}
console.log(klaus.getFullname());
console.log(klaus.isOld());
const anna = new User('Anna', 'Fischer');
anna.age = 24;
console.log(anna.isOld());

class Person extends User {
  constructor(firstname, lastname, age) {
    super(firstname, lastname);
    this.age = age;
  }

  growOlder() {
    this.age += 1;
  }

  static create(f, l, a) {
    return new this(f, l, a);
  }
}

const julia = new Person('Julia', 'Schmitt', 76);
console.log(julia);
julia.growOlder();
console.log(julia);
const herbert = Person.create('Herbert', 'Schmitt', 35);
console.log(herbert);
herbert.growOlder();
console.log(herbert);

// overloading

class Animal {
  constructor(type, name = 'John Doe') {
    this.type = type;
    this.name = name;
    this.pos = 0;
  }

  move() {
    this.pos += 1;
  }

  move(speed = 1) {
    this.pos += 1 * speed;
  }
}



const a = new Animal('igel', 'iggy');
const a2 = new Animal('igel');

a.move();
a2.move(4);
console.log(a);
console.log(a2);