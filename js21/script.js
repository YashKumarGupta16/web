const express = require('express')
const app = express()

app.use(function (req, res, next) {
    console.log("hello from middleware");
    next();
});
//routes ke chalne se pehle middleware chalega
app.use(function (req, res, next) {
    console.log("hello from middleware 2");
    next();
// req mein user ka data aa jata hai, uske basis pe hum kuch kar sakte hai
// res mein hum user ko kya bhejna chahte hai wo bhej sakte hai
});

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile', (req, res) => {
  res.send('hey from profile')
})

app.listen(3000);



// node vs express - node is the main thing express ke code se hum server ka code likh pate and server kaisa react karega wo bhi express ke help se likhte hai
// what is express js - package, routing
// why express js - http is difficult to use, express makes this easier
// routing - routes banaane ke process ko hum kahte hai routing. /profile
// /home
// /contact
// /profile/harsh/iuyahyicuhaihkcaljc9acuas/u7catsi7cuah8cuajc




// node ke saath ek dikkat hagar control ek baar bhi kisi middleware par gaya to control 
// khud se agle route/middleware par nahi jaayega, use agle par lejaane ke liye aapko push
// karna padega aur ye push next seaayega