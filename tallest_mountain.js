(function() {

  var strMountainArray = [1, 3, 8, 2]

  var sorted = strMountainArray.sort(function(a, b) {
    return b - a
  });

  var tallest = sorted[0]

  console.log(tallest);

})();
