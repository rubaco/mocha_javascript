var getContainsVowel = require('../containsVowel.js');
var chai = require('chai');
var expect = chai.expect;

    describe('getContainsVowel', function() {
      context('when send car', function() {
        it('returns true', function() {
        
        a = "car"
       
       let contains = getContainsVowel(a);
        expect(contains).to.equal(true);
        });
      });
    });

    describe('getContainsVowel', function() {
        context('when send crr', function() {
          it('returns false', function() {
          
          a = "crr"
         
         let contains = getContainsVowel(a);
          expect(contains).to.equal(false);
          });
        });
      });

