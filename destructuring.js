const klaus = {
  firstname: 'Klaus',
  lastname: 'Müller',
  address: {
    street: 'Main Str. 7',
    place: 'Berlin, Mitte ☣️'
  }
};

// const firstname = klaus.firstname;
// const street = klaus.address.street;

const {firstname, address: {street}} = klaus;
console.log(firstname, street);

const arr = [1,2,klaus];
const [,second, {address: {place}}] = arr;

console.log(second, place);

function greet({firstname}: User) {
  console.log(`Hallo ${firstname}`)
}

greet(klaus);