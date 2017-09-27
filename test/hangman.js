var sendWord= require('../hangman.js');
var chai = require('chai');
var expect = chai.expect;

    describe('sendWord', function() {
      context('when passing excellent', function() {
        it('returns 1 letter', function() {
        
        firstWord = "excellent"
       let search= sendWord(firstWord);
        expect(search).to.equal(1);
        });
      });
    });