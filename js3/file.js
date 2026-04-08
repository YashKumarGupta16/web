document.querySelector(".c1").innerText += " XYZ company";

// let divs = document.querySelector(".c2");
// console.log(divs[1]);     this will return null because qS select only 1 element

let divs = document.querySelectorAll(".c2");
console.log(divs[1]);
divs[1].innerText= "intermediate";

for(div of divs){
    //
}

// getAttribute,setAttribute
divs[1].style.backgroundColor = "green";   //node.style.

// similarly node.prepend/append