console.log("Synchronous Task-1 done!!");

setTimeout(()=>{
    console.log("Timeout phase");
    
},0);

process.nextTick(()=>{
    console.log("next tick priority")
});

console.log("Synchronous operation-2 done !!");

// order of execution...
// Synchronous Task-1 done!!
// Synchronous operation-2 done !!
// next tick priority
// Timeout phase
