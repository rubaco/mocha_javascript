var getGreaterThan = require('../greaterThan.js');
var chai = require('chai');
var expect = chai.expect;

    describe('getGreaterThan', function() {
      context('when passing 3 and 5', function() {
        it('returns true', function() {
        
        a = 3
        b = 5
       

       let greater = getGreaterThan(a,b);
        expect(greater).to.equal(true);
        });
      });

      context('when passing 5 and 3', function() {
        it('returns false', function() {
        
        a = 5
        b = 3
       

       let greater = getGreaterThan(a,b);
        expect(greater).to.equal(false);
        });
      });
    });