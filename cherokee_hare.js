(function(){

let startingPopulation = 200;

let birthRate = .10;

let numberOfWeeks = 5;

let totalHarePopulation;

totalHarePopulation = (startingPopulation * birthRate) * numberOfWeeks;

console.log("There will be: " + totalHarePopulation + " Cherokee Hares after " + numberOfWeeks + " weeks expanding at a rate of " + Math.round(birthRate * 100) + "%");


  })();
