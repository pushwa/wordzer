//
const express = require('express');
const app = express();
const path = require('path');

//
app.use(express.static(path.join(__dirname, '/public')));

//
app.set('view engine', 'ejs');

//
const index = require(path.join(__dirname, '/routes/index'));
app.use(index);

//
const port = process.env.PORT || 8000;
app.listen(port);
