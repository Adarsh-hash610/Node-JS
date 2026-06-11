const fs = require('fs');
const https = require('https');

setImmediate(()=>{
    console.log("set Immediate !!");
});
setTimeout(()=>{
    console.log("1st timer expired!!")
},0);
Promise.resolve("Promise done!!").then((user)=>{
    console.log(user);
});
fs.readFile('./file.txt',"utf-8",()=>{
    setTimeout(()=>{
        console.log("2nd timer expired!!")
    },0);

    process.nextTick(()=>{
        console.log("2nd next tick!!")
    });

    setImmediate(()=>{
        console.log("2nd set Immediate");
    });

    console.log("File read operation done!!");
});

process.nextTick(()=>{
    console.log("1st next Tick")
});

console.log("Last line of the code file!!");

// Order of execution...
// last line of the code file
// 1st next Tick
// Promise done!!
// first timer expired
// set Immediate
// File read operation done!!
// 2nd next Tick
// 2nd set Immediate
// 2nd timer expired
