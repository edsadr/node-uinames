'use strict';

var expect = require('chai').expect;
var uinames = require('../index.js')


describe('uinames', function () {
  uinames({
    country: 'Nocountry'
  }, function (err, person) {
    it('Should be an error', function () {
      expect(err).not.to.be.null();
    });

    it('Should not have a person', function () {
      expect(person).to.be.undefined();
    });
  });

  uinames({
    amount: 1
  }, function (err, person) {
    it('Should not to be an error', function () {
      expect(err).to.be.null();
    });

    it('Should have a person', function () {
      expect(person).not.to.be.undefined();
    });

    it('Should have a gender', function () {
      expect(person[0]).to.include.keys('gender');
    });

    it('Should be male or female', function () {
      expect(person[0].gender).to.satisfy(function (gender) {
        return gender === 'male' || gender === 'female';
      });
    });

    it('Should be from Colombia', function () {
      expect(person[0].country).to.be.equal('Colombia');
    });
  });

  uinames({
    country: 'United States',
    amount: 10
  }, function (err, person) {
    it('Should have 10 people', function () {
      expect(person.length).to.be.equal(10);
    });

    it('Should be from USA', function () {
      expect(person[0].country).to.be.equal('United States');
    });
  });
})