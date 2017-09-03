(function() {

  let word = "ironnnnnnyard"
  let counter = 0;
  let guessLetter = "x";

  wordArray = word.split("")
  console.log(wordArray);

  for (let i = 0; i < word.length; i++) {
    console.log(wordArray[i])
    if (wordArray[i] == guessLetter) {
      console.log("found!!")
      counter = counter + 1;
    }

  }

  if (counter > 0) {
    console.log("found the letter \"" + guessLetter + "\" " + counter + " times")
  } else {
    console.log("letter not found")
  }

})();
