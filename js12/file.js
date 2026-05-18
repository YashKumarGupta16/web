// nested callback
//suppose we want 2sec delay data1 then 2sec delay data2 and so on
function getData(id,getNextdata){
    setTimeout(()=>{
        console.log("Data ",id);
        if(getNextdata){
            getNextdata();
        }
         },2000);
}

getData(1,()=>{
    getData(2);     
});

// but this is callaback hell..because this code(so many nested callbacks) 
// is hard to manage
// to solve problem of callback hell comes concept of promises in js