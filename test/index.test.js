'use strict';

var expect = require('chai').expect;
var uinames = require('../uinames.js')


describe('uinames', function () {
	uinames({country: 'Nocountry', amount: 1}, function(err,person){
		it('Should be an error',function(){
			expect(err).not.to.be.null();
		});

		it('Should not have a person',function(){
			expect(person).to.be.undefined();
		});
	});

	uinames({country: 'Colombia', amount: 1}, function(err,person){
		it('Should not to be an error',function(){
			expect(err).to.be.null();
		});

		it('Should have a person',function(){
			expect(person).not.to.be.null();
		});
	});
})
