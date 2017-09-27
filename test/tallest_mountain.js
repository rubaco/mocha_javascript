var tallestMountain = require('../tallest_mountain.js');
var chai = require('chai');
var expect = chai.expect;

    describe('tallestMountain', function() {
      context('when passing [1,2,3,4]', function() {
        it('returns tallest - 4', function() {
        
        myArray = [1,2,3,4]
       let tallest = tallestMountain(myArray);
        expect(tallest).to.equal(4);
        });
      });
    });
  