const crypto = require("node:crypto");

console.log("Hello World");
var a = 10546;
var b = 12556;

// pbkdf2 --> Password-based Key Derivation Function 2

// Synchronous function...
// sync methods block the main thread of execution, don't use
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("first key is generated");
console.log("Above iterations block the main thread of execution");

// Async function...
crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key)=>{
    console.log("Second key is generated");

});

function multiplyFn(a,b){
    const result = a*b;
    return result;
}
let c = multiplyFn(a,b);
console.log("result of multiplyfn: ",c);



