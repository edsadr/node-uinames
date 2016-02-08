'use strict';

var defaults = require('defaults');

module.exports = function (args, callback) {

  // Function extracting a random element from a given array
  var randomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  //Defaults
  var options = {
    amount: 1,
    region: 'Colombia', //que viva Colombia
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
    return callback(new Error('Source names not found, please run `npm run get-source` at the module folder'));
  }

  var countries = source.map(function (index) {
    return index.region;
  });

  var target = source.filter(function (data) {
    return data.region.toLowerCase() === query.region.toLowerCase();
  });

  // Checking if the region is there
  if (!target || target.length < 1) {
    return callback(
      new Error('Your region is not available, valid options are: ' + countries.toString()
      + ' - You can contribute yours here: https://github.com/thm/uinames/blob/master/names.json')
    );
  }

  var region = target[0];

  // Generate the names
  for (var i = 0; i < query.amount; i++) {
    var gender = (query.gender) ? query.gender : randomElement(['male', 'female']);

    var person = {
      firstName: randomElement(region[gender]),
      lastName: randomElement(region.surnames),
      gender: gender,
      region: query.region
    };

    results.push(person);
  }

  callback(null, results);
};
