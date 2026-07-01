// promise concept through getData API call

function getData(id,getNextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data ",id);
            resolve("succeed");
            if(getNextdata){
                getNextdata();
            }
        },8000);
    });
}


//check on console
// let promise = getData(123)
// undefined
// promise
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// file.js:6 Data  123
// promise(after data getting promise state becomes fulfilled)

//in general programming when we call an api to fetch data
// they return us promise..we as programmer dont create promise
// we should know how to use the promise we got from somewhere


