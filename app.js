require('./test.js');           //one module into another...

var name = "Namaste Node JS"
console.log(name);
// console.log(globalThis);

const {x, calculateSum} = require ('./sum.js');
let a= 10;
let b =20;
calculateSum(a,b)   

console.log(x);

// console.log(this);      //empty object
console.log(globalThis === global);     //true

// In ES module we use import and export
// In commonJS we use require and module.exports