



function tallestMountain(strMountainArray){

  
  var sorted = strMountainArray.sort(function(a, b) {
    return b - a
  });

  var tallest = sorted[0]

  console.log(tallest);
  return tallest;
  
}

//let myArray = [1,2,3,4];
//tallestMountains(myArray);

module.exports = tallestMountain;



