// named function
function add(a, b) {
  // die folgenden 3 Zeilen bitte nach dem Lesen sofort vergessen!
  console.log('3. argument: ', arguments[2]);
  console.log('length: ', arguments.length); // lenght - eigenschaft ist definiert
  console.log('push: ', arguments.push); // Array methoden gibt's nicht
  return a + b;
}
// zum testen bitten einkommentieren
// console.log(add(1, 2)); // 3
// console.log(add(1,2,3)); // 3 zu viele Parameter werden ignoriert
// console.log(add(1)); // NaN zu wenige Parameter werden mit undefined vorbelegt

// named function mit variabler parameterliste
function varParams(name, ...rest) {
  console.log('name: ', name);
  console.log('rest: ', rest);
  // console.log(rest.push);
}
// varParams('Klaus');
// varParams('Klaus', 'Peter', 'Paul', 'Mary');

// anonyme funktion
const addAnon = function (a, b) {
  return a + b;
}
// console.log(addAnon); // funktionsobjekt - arbeitet mit dem Funktionsobjekt
// console.log(addAnon(1, 2)); // funktionsaufruf - arbeitet man mit dem Rückgabewert

// anonyme selbstaufrufende funktion (IIFE)
const result = (function (a, b) {
  const addAnon = 'foo';
  return a + b;
}(1,2));
// console.log(result);

const result2 = [1,2,3].map((value) => {
  return value * value;
});
const result3 = [1,2,3].map(function(value) {
  return value * value;
});
const result4 = [1,2,3].map(value => { // Klammern bei 1 Parameter optional
  return value * value;
});
const result5 = [1,2,3].map(value => value * value); // {} + return bei 1 statement optional
// console.log(result2);

const klaus = {
  firstname: 'Klaus',
  greet() {
    // setTimeout(function () { // bei function - this != this
    //   console.log(`Hallo ${this.firstname}`);
    // }.bind(this), 1000); // explizites Binding von this
    
    setTimeout(() => { // arrow function nutzt das this des umgebenden contexts
      console.log(`Hallo ${this.firstname}`);
    }, 1000);
  }
}
klaus.greet();
