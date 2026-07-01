// promise.then((res)=>{
//     executted when promise got fulfilled
// })
// promise.catch((err)=>{
//     executted when promise got rejected
// })

function getData(){
    return new Promise((resolve,reject)=>{
        console.log("data is xyz");
        resolve("we,Api gave the data");
    });
}

let promise = getData();
promise.then((res)=>{
    console.log("we,coder showed the data to the user",res);
});

promise.catch((err)=>{
    console.log("we,coder cant show the data to the user",err);
});