let data = require('./script.js');
console.log(data);



var oneLinerJoke = require('one-liner-joke');
console.log(oneLinerJoke.getRandomJoke());



const figlet = require('figlet');
figlet("Hello Yash", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});