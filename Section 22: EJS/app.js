const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  const today = new Date();
  const currentDay = today.getDay();

  if (currentDay === 6 || currentDay === 0) {
    res.write("<h1>Yay it's the weekend!</h1>");
  } else {
    res.sendFile(`${__dirname}/index.html`);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});