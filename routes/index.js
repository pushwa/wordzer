//
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

//
const readFileAndParse_Promise = filePath => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject('Unable to read the file');
      resolve(JSON.parse(data));
    });
  });
};

//
router.get('/', (req, res) => {
  //
  readFileAndParse_Promise(path.resolve('.') + '/json/base.json').then(data => {
    res.render('index', { h1: data.h1, bt: data.bt });
  });
});

//
module.exports = router;
