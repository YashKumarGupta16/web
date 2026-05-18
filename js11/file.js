// a callback is a function passed as an argument to another function

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(3,4,sum);

//sum is the callback function here

//nested callback = callback hell
