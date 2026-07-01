// await  pauses the execuion of surrounding async function
//until the promise is settled...await is only valid in async function

function api(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data is ",dataId);
            resolve("success");
        },3000);
        });
}

async function getData(){
    console.log("getting data1");
    await api(23);
    console.log("getting data2");
    await api(57);
}

getData();