//classes in js
//used to creste objects

class Animal{
    run(){
        console.log("animal runs");
    }
    speak(){
        console.log("animal dont speak");
    }
    setVoice(sound){
        this.sound = sound; //first sound is object's property and second
    }                       //sound is argument of function

    constructor(colour,size){   //invoked when new keyword is used
        this.colour = colour;  
        this.size = size
    }
}

let dog = new Animal("black","medium");
dog.setVoice("bark");

let cat = new Animal("brown","small");
 
