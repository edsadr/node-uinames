'use strict';

var defaults = require('defaults');

module.exports = function(args, callback) {

  // Function extracting a random element from a given array
  var randomElement = function(array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  //Defaults
  var options = {
    amount: 1,
    country: 'Colombia', //que viva Colombia
    gender: false
  };

  //Validating inputs against defaults
  var query = defaults(args, options);

  var results = [];

  // Require the names file
  var source;
  try {
    source = require('./names');
  } catch (e) {
    return callback(new Error('Source names not found, please run `npm getsource` at the module folder'));
  }

  var countries = source.map(function(index){
    return index.country;
  });

  var target = source.filter(function (data) {
    return data.country.toLowerCase() === query.country.toLowerCase();
  });

  // Checking if the country is there
  if (!target || target.length < 1) {
    return callback(
      new Error('Your country is not available, valid options are: ' + countries.toString())
    );
  }

  var country = target[0];

  // Generate the names
  for (var i = 0; i < query.amount; i++) {
    var gender = (query.gender) ? query.gender : randomElement(['male', 'female']);

    var person = {
      firstName: randomElement(country[gender]),
      lastName: randomElement(country.surnames),
      gender: gender
    };

    results.push(person);
  }

  callback(null, results);
};
