const express = require('express');
const bodyParser = require('body-parser');
const date = require(`${__dirname}/date.js`);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

let items = [];
let workItems = [];

app.get('/', (req, res) => {
  const day = date.getDate();

  res.render('list', { listTitle: day, items });
});

app.post('/', (req, res) => {
  let item = req.body.newItem;

  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.get('/work', (req, res) => {
  res.render('list', { listTitle: "Work List", items: workItems })
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});