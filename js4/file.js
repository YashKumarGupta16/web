let button = document.createElement("button");
button.innerText = "click me";
button.style.backgroundColor = "red";
button.style.color = "blue";

let body = document.querySelector("body");
body.prepend(button);