 'use strict';
 var request = require('request')
   ,fs = require('fs');

 fs.exists('names.json', function(exists) {
   if (!exists) {
     request.get('https://raw.githubusercontent.com/thm/uinames/master/names.json')
       .pipe(fs.createWriteStream('names.json'));
   }
 });
