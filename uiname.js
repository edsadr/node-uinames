'use strict';

var fs = require('fs');
var jsonQuery = require('json-query');

module.exports = function(args) {

  args = (args === undefined) ? {} : args;

  args.gender = (args.gender === undefined) ? 'male' : args.gender;
  args.country = (args.country === undefined) ? 'United States' : args.country;
  args.amount = (args.amount === undefined) ? 1 : args.amount;
  
  var results = [];
  var source;

  fs.readFile('names.json', function(err, data) {
    if (err) throw err;
    source = JSON.parse(data);
    console.log(jsonQuery('[country='+args.country+']', {data: source}).value);
  });
}