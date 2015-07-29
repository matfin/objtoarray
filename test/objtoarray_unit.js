'use strict';

var chai = require('chai'),
		should = chai.should(),
		asset = chai.assert,
		expect = chai.expect,
		objtoarray = require('../objtoarray'),
		convert = objtoarray.convert;

describe('#convert', function() {

	var test_object = {
		nested: {
			right: {
				here: {
					is: {
						something: 'interesting'
					}
				}
			}
		}
	},

	atomic = objtoarray.convert(2),

	remapped_test_object = objtoarray.convert(test_object);

	it('should be an array', function() {
		expect(remapped_test_object).to.be.a('array');
	});

	it('should have the correct nested array key structure', function() {
		expect(remapped_test_object['nested']).to.be.a('array');
		expect(remapped_test_object['nested']['right']).to.be.a('array');
		expect(remapped_test_object['nested']['right']['here']).to.be.a('array');
		expect(remapped_test_object['nested']['right']['here']['is']).to.be.a('array')
	});

	it('should leave atomic values as they were', function() {
		expect(remapped_test_object['nested']['right']['here']['is']['something']).to.equal('interesting');
	});

	it('should return an atomic value immediately', function() {
		expect(atomic).to.be.a('number');
		expect(atomic).to.equal(2);
	});

});
