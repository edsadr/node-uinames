'use strict';
var request = require('request'),
  fs = require('fs');

var namesUrl = 'https://raw.githubusercontent.com/thm/uinames/master/names.json';

fs.stat('names.json', function (err, stat) {
  if (err || !stat) {
    request.get(namesUrl)
      .pipe(fs.createWriteStream('names.json'));
  }
});