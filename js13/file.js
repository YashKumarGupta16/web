// promises are basically object in js which have three states-
// pending,resolve(fulfilled),rejected...resolve and reject are handlers(callback) 
// that are automatically created by js


let promise1 = new Promise((resolve,reject)=>{
        console.log("I am a promise1");
        resolve("promise1 fullfiled");
});

let promise2 = new Promise((resolve,reject)=>{
    console.log("I am promise2");
    reject("promise2 rejected");
});

let promise3 = new Promise((resolve,reject)=>{
    console.log("I am promise3");
    //promise state pending
});

//check in console