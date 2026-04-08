console.log("BASIC 2");

//Arrays
let arr1 = ["Ram","Shyam","Naman"];
let arr2 = [78,45,56];
console.log(arr1,arr1.length,arr2[1]);
//array elements are mutable

arr2.push(87);
console.log(arr2);

//functions
function sum(x,y){
    return x+y;
}

let add =sum(5,6);
console.log(add);

function count_vowel(){
    let ans =0;
    let str = prompt("Enter the word(in small letter)");
    str=str.toLowerCase();
    for(let i=0;i<str.length;i++){
        if(str[i]=='a' || str[i]=='e' ||str[i]=='i' ||str[i]=='o' ||str[i]=='u' ){
            ans++;
        }
    }
    console.log(ans);
}
count_vowel();

// arrow functions
const total = (a,b)=>{
    return a+b;
}
console.log(total(16,2));

//forEach use
let arr = [8,7,6];
arr.forEach(function printVal(val){
    console.log(val);
});    //callback function executes itself

let city = ["Beijing","Agra","Tokyo"];
city.forEach((val)=>{
    console.log(val);
});
//parameter sequence is val,idx,array



// Higher order functions ->which take function as parameter or return a function


 

