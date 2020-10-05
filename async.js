// console.log('A');

// setTimeout(() => {
//   const value = 'Hallo Welt';
//   console.log('B');
// }, 1000);

// console.log('C');

// Callbacks
function asyncCallback(callback) {
  setTimeout(() => {
    const value = 'Hallo Welt';
    callback(value); // CB aufrufen
  }, 1000);
}

// CB funktion definieren
const callbackFn = function (value) {
  console.log('CallbackFn: ', value);
}
asyncCallback(callbackFn); // CB übergeben


// callback hell (pseudocode)
// fexists(() => {
//   console.log('file exists');
//   fopen((fd) => {
//     console.log('opening file handle');
//     fread(fd, (data) => {
//       console.log('reading from file');
//       fclose(fd, () => {
//         console.log('ok thanks bye');
//       });
//     })
//   })
// })

// Level 1 async: Promises
function asyncPromise(value = 'Hallo Welt', success = true, timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(value);
      } else {
        reject(value);
      }
    }, timeout);
  });
}

// Promise mit success und failure in .then()
// asyncPromise('Hallo Welt', false).then(function success(value) {
//   console.log('Success: ', value);
// }, function failure(err) {
//   console.error('Error', err);
// });

// Promise mit success und failure in .then() und .catch()
// asyncPromise('Hallo Welt', false)
// .then(function success(value) {
//   console.log('Success: ', value);
// })
// .catch(function failure(err) {
//   console.error('Error', err);
// });

// Callback Promise Hell - then in then geht gar nicht!
// asyncPromise('Wert 1')
// .then((data) => {
//   console.log(data);
//   asyncPromise('Wert 2').then((data) => {
//     console.log(data);
//     asyncPromise('Wert 3').then((data) => {
//       console.log(data);
//     });
//   });
// });

// Promisekette
// asyncPromise('Wert 1')
// .then((data) => {
//   console.log(data);
//   return asyncPromise('Wert 2');
// }).then((data) => {
//   console.log(data);
//   return asyncPromise('Wert 3');
// }).then((data) => {
//   console.log(data);
// }).catch((err) => { // fängt alle fehler der kette
//   console.error('WHOO'); 
// });

const myPromise = asyncPromise('Wert 1');
const myPromise2 = asyncPromise('Wert 2');
const myPromise3 = asyncPromise('Wert 3');
const myPromise4 = asyncPromise('Wert 4');

// weitermachen wenn alle promiseses erfüllt
Promise.all(
  [myPromise, myPromise2, myPromise3, myPromise4]
).then(values => console.log('all: ', values));

// weitermachen mit der schnellsten promise
Promise.race(
  [myPromise, myPromise2, myPromise3, myPromise4]
).then(values => console.log('race: ', values));

// const pRes = Promise.resolve('value'); // liefert eine resolved promise
// const pRej = Promise.reject('Whoops'); // liefert eine rejected promise


// async/await
async function asyncAsync() { // return value ist IMMER ein promise Objekt
  try {
    const data = await asyncPromise('async Wert 1')
    console.log(data);
    const data2 = await asyncPromise('async Wert 2', false)
    console.log(data2);
    const data3 = await asyncPromise('async Wert 3')
    console.log(data3);
  } catch (e) {
    console.error('👻', e);
  }
  return 'done';
}

asyncAsync().then(value => console.log(value));
(async () => {
  const vs = await Promise.all([
    asyncAsync(),
    asyncAsync(),
    asyncAsync(),
    asyncAsync(),
  ]);
  console.log('promise all mit async/await', vs)
})();