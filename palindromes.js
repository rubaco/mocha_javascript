(function() {

  word = "bob";
  console.log(word);

  wordReversed = word.split("").reverse().join("");
  console.log("reversed " + wordReversed);

  if (word == wordReversed) {
    console.log("its a palendrome")
    }
    else {
    console.log("its not a palendrome")
    }

})();
