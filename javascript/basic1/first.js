console.log("hello");

//variables
x=23;
console.log(x);
Name="Yash";
console.log(Name);
isTrue = true;
console.log(isTrue);

a=null;
b=undefined;
console.log(a);
console.log(b);

//javascript is dynamically typed language
x="hey";
console.log(x);

//var can be redeclared and updated as well(dont use)
// let cannot be redeclared but can be updated  (block scope variable)
// const cant be redeclare or update    (block scope variable)

let salary = 500;
salary = 600;
console.log(salary);
const pi = 3.14;

//object = collection of values/variables
const student = {
    name : "Suresh",
    age : 57,
    marks :99
};
console.log(student);
console.log(student.age);
//these object keys can be updated

//console.log(typeof student);

//operators
let m = 2;
console.log("a+1=",m+1);
console.log(7**2);

//conditional statements
let _age = 19;
if(_age>=18){
    console.log("Eligible");
}
else{
    console.log("not eligible");
}

// alert is a popup and prompt is also but with input
let password = prompt("Enter password");
console.log(password);

for(let i=1;i<=2;i++){
    console.log(i);
}

// for..of loop
let str = "Kota"
 for(let i of str){
    
 }
// string are immutable in javascript(imp)

for(let key in student){
    console.log(key ,"=",student[key] );
}

// Game number
let passcode = 12;
let attempt = -1
while(attempt!=passcode){
    attempt = prompt("Guess number");
}

// strings
console.log(str.length,str[2]);

// template string and string interpolation

let sentence = `The name of city is ${str}`;
console.log(sentence);

//Generating username for a user

let username = prompt("Enter full name");
console.log(`Username is ${'@'+username+username.length}`);

