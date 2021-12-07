const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: kelsiproulx1919@gmail.com');
});

app.get('/about', (req, res) => {
  res.send('I\'m a full stack web developer with a passion for code!');
});

app.get('/hobbies', (req, res) => {
  res.send('<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>')
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
});