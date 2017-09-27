var giveChange= require('../change_machine.js');
var chai = require('chai');
var expect = chai.expect;

    describe('giveMachine', function() {
      context('when passing 115', function() {
        it('returns tallest [5110]', function() {
        
       amount = 115;
       let change = giveChange(amount);
        expect(change).to.eql([ 5, 1, 0, undefined ]);
        });
      });
    });