'use strict';

var fs = require('fs');
var defaults = require('defaults');
var jsonQuery = require('json-query');

module.exports = function(args, callback) {

  //Function extracting a random element from a given array
  var randomElement = function(arrElrment) {
    return arrElrment[Math.floor(Math.random() * arrElrment.length)];
  };

  //Defaults
  var options = {    
    amount: 1,
    country: 'Colombia',//que viva Colombia
    gender: false
  };

  //Validating inputs against defaults
  var query = defaults(args, options);

  var results = [];

  //Reading the file previously dowloaded at the postinstall script
  fs.readFile('names.json', function(err, data) {
    if (err) {
      return callback(err);
    }

    //Parsing the data
    var source = JSON.parse(data);    
    var countries = source.map(function(index){
      return index.country;
    });


    //Querying
    var target = jsonQuery('[country=' + query.country + ']', {
      data: source
    }).value;

    //Checking if the country is there
    if(!target){
      var cerr= new Error('Your country is not available, valid options are: '+countries.toString());
      return callback(cerr);
    }


    //Generating the names
    for (var i = 0; i < query.amount; i++) {
      var gender = (query.gender)?query.gender:randomElement(['male', 'female']);
      
      var person = {
        firstName: randomElement(target[gender]),
        lastName: randomElement(target.surnames),
        gender: gender
      };

      results.push(person);
    }

    return callback(null, results);
  });
}