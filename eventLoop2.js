const fs = require('fs');
const https = require('https');

const a = 100;

setImmediate(()=>{
    console.log("set Immediate");
});

Promise.resolve("Promise").then((user)=>{
    console.log(user);
})

fs.readFile("./file.txt","utf-8",()=>{
    console.log("file read operation done!!");
});

setTimeout(()=>{
    console.log("Timer expired!!");
},0)

process.nextTick(()=>{
    console.log("process.nextTick performed!!")
});

function printA(){
    console.log("a: ",a);
}
printA();

console.log("this is the last line of the code file!!");

// Order of execution..
// a = 100
// this is the last line of the code file !!
// process.nextTick performed!!
// promise
// timer expired
// set Immediate
// file read operation done
