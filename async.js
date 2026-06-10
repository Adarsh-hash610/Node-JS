// const { resolve } = require('dns');
const fs = require('fs')
const https = require('https');

console.log("Namaste India !!");

let a = 10456;
let b = 12656;

// Synchronous function...
fs.readFileSync("./file.txt","utf-8");
console.log("Above line has blocked the main thread");


https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("data fetched successfully");
    
});

setTimeout(()=>{
    console.log("set timeout called after 5 seconds");
    
},5000);

// Async Function...
fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("File data: ",data);
    
});


function multiplyFn(a,b){
    const result = a*b;
    return result;
}
let c = multiplyFn(a,b);
console.log("Result of mulyiply: ",c);


