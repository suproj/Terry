var assert = require('assert');
var fs = require('fs');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Acronym Dictionary Integrity', function() {
	var arr;
	before(function() {
		var contents = fs.readFileSync("src/fakedAcronyms.JSON");
		arr = JSON.parse(contents);
	});
	
	it('should return correct definition when acronym exists', function() {
		assert.equal(arr['WLL'], "With Limited Liability");
	});
	
	it('should return undefined when acronym does not exist', function() {
		assert.equal(arr['lkjalsd'], undefined);
	});
});

/*
describe('Acronym Lookup', function() {
	it('should return correct definition', function() {
		assert.equal(lookupAcronym('s+'),'Otherwise known as Schedule +, a Microsoft calendaring and scheduling technology that hasn't been used in years. It still lives on in common MicroSpeak though');
		assert.equal(lookupAcronym('WLL'), 'With Limited Liability');
	});
	
	it('should return error', function() {
		assert.error
	});
});
*/