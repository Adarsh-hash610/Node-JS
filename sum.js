// Modules protects their variables and functions from leaking

console.log("Sum module executed");

const x = "Namaste India!!!"

function calculateSum(a,b){
    const sum = a+b;

    console.log(`sum of two numbers are ${sum}`);
}
module.exports = {x, calculateSum};