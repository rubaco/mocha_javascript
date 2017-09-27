var palindromesBool= require('../palindromes.js');
var chai = require('chai');
var expect = chai.expect;

    describe('palindromesBool', function() {
      context('when passing Bob', function() {
        it('returns true for palindromes', function() {
        
       word = "bob"

       let check= palindromesBool(word)
        expect(check).to.equal(true);
        });
      });

      context('when passing Ted', function() {
        it('returns false for palindromes', function() {
        
       word = "ted"

       let check= palindromesBool(word)
        expect(check).to.equal(false);
        });
      });
    });