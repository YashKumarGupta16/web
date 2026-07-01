import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile', (req, res) => {
  res.send('This is the profile page')
})

app.get('/profile/:username', (req, res) => {
  res.send(`Hello ${req.params.username}, this is your profile page`);
})

app.listen(3000);

// this is dynamic routing, where we can pass a parameter
