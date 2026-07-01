//promise chaining-->to fetch data one after another

const getStateAPI = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("State is xyz");
            resolve("state shared");
        },4000);
    });
}

const getCityAPI = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("City is pqr");
            resolve("city shared");
        },4000);
    });
}

console.log("fetching state");
let state_promise = getStateAPI();
state_promise.then((res)=>{
    console.log("fetching city");
    let city_promise = getCityAPI();
    city_promise.then((res)=>{
        console.log("both fetched");
    })
});

//promise chaining better than callback hell
// but better than promise chaining is next concept async await