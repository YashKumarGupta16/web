let button = document.querySelector("#i1");
let body = document.querySelector("body"); 
let flag = true;

button.addEventListener("click",function(evt){
    
    if(flag){
        body.style.backgroundColor = "black";
        button.innerText = "switch to day mode";
        flag = false;
    }
    else{
        body.style.backgroundColor = "white";
        button.innerText = "switch to dark mode";
        flag = true;
    }
})