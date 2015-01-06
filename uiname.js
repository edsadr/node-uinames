'use strict';

//var fs = require('fs');

module.exports = function(gender, country, amount) {

  if (gender === undefined) {
    gender = 'male';
  }

  if (country === undefined) {
    country = 'United States';
  }

  if (amount === undefined) {
    amount = 1;
  }
}
