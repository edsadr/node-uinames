'use strict';
var request = require('request'),
  fs = require('fs');

var namesUrl = 'https://raw.githubusercontent.com/thm/uinames/master/names.json';

if (process.argv[2] === 'create') {
  createFile();
} else if (process.argv[2] === 'update') {
  deleteFile();
  createFile();
}

function deleteFile() {
  fs.unlink('names.json', function (err) {
    if (err) throw err;
    	
  });
}

function createFile() {
  fs.stat('names.json', function (err, stat) {
    if (err || !stat) {
      request.get(namesUrl)
        .pipe(fs.createWriteStream('names.json'));
    }
  });
}