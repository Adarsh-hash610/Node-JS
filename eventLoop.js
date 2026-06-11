const fs = require('fs');
const https = require('https');

const a = 100;

setImmediate(()=>{
    console.log("Immediate is called!!");
});

fs.readFile('./file.txt',"utf-8",()=>{
    console.log("File reading operation finished!!");
})

setTimeout(()=>{
    console.log("Timer expired!!")
},0);

function printA(){
    console.log("a: ",a);
}
printA();
console.log("this is the last line!!");

setTimeout(()=>{
    console.log("second timer expired!!");
},0)

