const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/db');
const userController = require('./controllers/userController');

const app = express();

app.use(bodyParser.json());

app.use('/', userController);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});