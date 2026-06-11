const fs = require('fs');

setImmediate(()=>{
    console.log("set Immediate");
})

setTimeout(()=>{
    console.log("1st timer expired !!");
},0)

Promise.resolve("Promise!!").then((user)=>{
    console.log(user);
});

fs.readFile('./file.txt',"utf-8",()=>{
    console.log("file reading operation done!!");
});

process.nextTick(()=>{
    process.nextTick(()=>{
        console.log("Inner next tick");
    })
    console.log("outer next tick");
});

console.log("last line of the code file!!");

// Order of execution...
// last line of the code file
// outer next tick
// Inner next tick
// Promise!!
// 1st timer expired
// set Immediate
// file read operation done!!
