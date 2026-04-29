// set prototype using __proto__

const emp1 ={
    name : "xyz",
    age : 43,
    printAge(){
        console.log("age is ",this.age)
    }
};

const emp2 = {
    name : "pqr",
    age : 32
};

emp2.__proto__ = emp1;