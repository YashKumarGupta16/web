// object is an entity having properties and methods
//js objects have special by default propert called prototype
// this prototype too is an object (it also has properties and methods)

const student = {
    name : "yash",
    age : 22,
    printAge : function () {
        console.log("age is ", this.age);
    }
};
// if an object has a function and its prototype also has same name
//funcion then then object's function gets executed