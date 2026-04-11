// change in the state of object is event....eg btton onclick/mouseover etc


// external event handling (suggested)
let button=document.querySelector("#i2");
button.onclick = (evt) =>{
    console.log("button is clicked");
    console.log(evt);
}

//overall     node.event = () =>{...}

// event handling in js file is prior over inline handling

// event object contains all info about an event:    = (evt) =>
 // but we will use addEventListener so that same event on same obj can be exctd more

//better way
let abc = document.querySelector("#i3");
abc.addEventListener("click" , function(evt){
    console.log("event listener 1");
    console.log(evt.type);
});

abc.addEventListener("click",function(evt){
    alert("hehe");
});

// node.addEventListener(eventname,callback);