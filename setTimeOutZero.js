console.log("Namste India !!");

let a = 10456;
let b = 12556;

setTimeout(()=>{
    console.log("Call me right now !!");
    
},0);

setTimeout(() => {
    console.log("Call me right after 3 seconds !!");
    
}, 3000);

function multiplyFn(a,b){
    const result = a*b;
    return result;
}
let c = multiplyFn(a,b);
console.log("Result of multiplyFn: ",c);

