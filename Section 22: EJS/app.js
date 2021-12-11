const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

let items = [];

app.get('/', (req, res) => {
  const today = new Date();
  
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  const day = today.toLocaleDateString('en-US', options);

   res.render('list', { day, items });
});

app.post('/', (req, res) => {
  items.push(req.body.newItem);

  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});