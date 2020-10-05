// scoping
// global scope - global gültig - variable außerhalb einer funktion
const foo = 'bar';

// function scope - variablen innerhalb einer funktion
(function () {
  const foo = 'bar';
}());

// closure scope - funktionsscope und der erstellende context
const fn = (() => {
  const klaus = {
    name: 'Klaus'
  };

  return {
    getName() {
      return klaus.name;
    },
    setName(v) {
      klaus.name = v;
    }
  }
})();
// console.log(klaus.name); // geht nicht
// console.log(fn.getName());
// console.log(fn.setName('Ludmilla')); // eine Funktion ohne explizites return gibt IMMER undefined zurück
// console.log(fn.getName());

// block scope
for (let i = 0; i < 10; i++ ) {

}
// console.log(i); Reference Error - i is not defined

// var => global, function, closure => VERGESST var!
// let => global, function, closure, block
// const => global, function, closure, block

let s = 'Hallo';
const s2 = 'Hallo';
s = 'welt';
// s2 = 'welt'; geht nicht weil const

let obj = {name: 'Klaus'};
const obj2 = {name: 'Klaus'}; // Objektreferenz ist konstant, nicht das Objekt selbst

obj = {age: 42};
// obj2 = {age:  42}; - geht nicht weil const

obj2.name = 'Peter';
// Object.freeze(obj2); - vor änderungen schützen
obj2.age = 42;
// delete obj2.age; Eigenschaft entfernen
console.log(obj2);

// mit const beginnen und erst wenn Veränderung nötig => let