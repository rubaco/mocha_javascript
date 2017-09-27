var getAverage = require('../average.js');
var chai = require('chai');
var expect = chai.expect;

    describe('getAverage', function() {
      context('when adding 3 plus 4 plus 2', function() {
        it('returns average of 9', function() {
        
        a = 3
        b = 4
        c = 2

       let theAverage = getAverage(a,b,c);
        expect(theAverage).to.equal(3);
        });
      });
    });