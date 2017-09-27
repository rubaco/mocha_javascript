var sendParameters= require('../cherokee_hare.js');
var chai = require('chai');
var expect = chai.expect;

    describe('sendParameters', function() {
      context('when passing 200, .10, 5', function() {
        it('returns 100', function() {
        
        a = 200;
        b = .10;
        c = 5;

       let search= sendParameters(a,b,c);
        expect(search).to.equal(100);
        });
      });
    });