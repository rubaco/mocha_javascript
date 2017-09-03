(function() {



  let numberArray = [1, 5, 10, 20]
  console.log(numberArray);

  let twentyDollarBills;
  let tenDollarBills;
  let fiveDollarBills;
  let oneDollarBills;
  let total = 115;

  //20 bill
  if (total => 20) {
    twentyDollarBills = Math.floor(total / 20);
    console.log("there are: " + twentyDollarBills + " twenty dollar bills")
    let subtract20 = 20 * twentyDollarBills;
    total = total - subtract20;
  }

  //10 bill
  if (total => 10) {
    tenDollarBills = Math.floor(total / 10);
    console.log("there are: " + tenDollarBills + " ten dollar bills")
    let subtract10 = 10 * tenDollarBills;
    total = total - subtract10;
  }

  //5 bill
  if (total => 5) {
    fiveDollarBills = Math.floor(total / 5);
    console.log("there are: " + fiveDollarBills + " five dollar bills")
    let subtract5 = 5 * fiveDollarBills;
    total = total - subtract5;
  }

  //1 bill
  if (total => 1) {
    fiveDollarBills = Math.floor(total / 5);
    console.log("there are: " + fiveDollarBills + " one dollar bills")
    let subtract5 = 5 * fiveDollarBills;
    total = total - subtract5;
  }

  let finalArray = [twentyDollarBills, tenDollarBills, fiveDollarBills, oneDollarBills];

})();
