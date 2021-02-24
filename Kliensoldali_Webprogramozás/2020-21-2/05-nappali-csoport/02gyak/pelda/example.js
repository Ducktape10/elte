//? 1.
function ß(selector) {
  if (selector) {
    return document.querySelector(selector);
  }

  return this;
}

ß.sayHello = () => {
  return 'Hello';
}

ß.sayHelloToName = (name) => {
  return `Hello ${name}`;
}

//? 2.
// class ß {
//   constructor(selector) {
//     if (selector) {
//       return document.querySelector(selector);
//     }

//     return this;
//   }
//   sayHello() {
//     return 'Hello';
//   }
//   sayHelloToName(name) {
//     return `Hello ${name}`;
//   }
// }

//? 3.
// class ß {
//   constructor(selector) {
//     if (selector) {
//       return document.querySelector(selector);
//     }

//     return this;
//   }
//   static sayHello() {
//     return 'Hello';
//   }
//   static sayHelloToName(name) {
//     return `Hello ${name}`;
//   }
// }
