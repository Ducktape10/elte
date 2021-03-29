// import { add } from './add.js';

// const a = 1;
// const b = 2;

// console.log(add(a, b));

// import { writeFile, writeFileSync } from 'file-system';

// writeFileSync('test.txt', 'Hello, nagyon durván tesztelek!');
// writeFileSync('test2.txt', 'Hello, megint durván tesztelek!');
// writeFileSync('test3.txt', 'Hello, újra durván tesztelek!');

// writeFile('test.txt', 'Hello, nagyon durván tesztelek!', {}, () => {
//   console.log(1);
//   writeFile('test2.txt', 'Hello, megint durván tesztelek!', {}, () => {
//     console.log(2);
//     writeFile('test3.txt', 'Hello, újra durván tesztelek!', {}, () => {
//       console.log(3);
//     });
//   });
// });

// Promise.resolve(() => {
//   setTimeout(() =>{
//     console.log('aopsdh');
//   }, 1000);
// }).then(
//   () => console.log('resolved')
// ).then(
//   () => console.log('resolved2')
// ).catch((ex) => {}).finally(
//   () => {}
// );

// async function multiply(a, b) {
  // const r = await Promise.resolve(() => {
  //   setTimeout(() =>{
  //     console.log('aopsdh');
  //   }, 1000);
  // });

// }

(async () => {
  const a = await new Promise((resolve, reject) => setTimeout(() => {
    console.log('aopsdh');
    resolve();
  }, 1000));

  console.log(a);
})();