const fs = require('fs');

// readFileSync blockiert bis der inhalt der datei da ist
console.log('A');
const data = fs.readFileSync('./class.js', 'utf-8');
console.log('B');

// readFile registriert callback und macht weiter - callback wird ausgeführt sobald datei da ist
console.log('A');
const data = fs.readFile('./class.js', 'utf-8', (err, data) => {
  console.log(data);
});
console.log('B');