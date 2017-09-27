var getLongestWord = require('../longestword.js');
var chai = require('chai');
var expect = chai.expect;

    describe('getLongestWord', function() {
      context('when sending in "a dog eats delicious food"', function() {
        it('returns delicious', function() {
        
     word = "a dog eats delicious food"

       let largest = getLongestWord(word);
        expect(largest).to.equal("delicious");
        });
      });
    });