var getSum = require('../sum.js');
var chai = require('chai');
var expect = chai.expect;

    describe('getSum', function() {
      context('when adding 3 plus 4', function() {
        it('returns 7', function() {
        
        a = 3
        b = 4

       let theSum = getSum(a,b);
        expect(theSum).to.equal(7);
        });
      });
    });