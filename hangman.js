



 // let word = "ironnnnnnyard"
 

function sendWord(word){
  let counter = 0;
  let guessLetter = "x";
  wordArray = word.split("")
  // console.log(wordArray);

  for (let i = 0; i < word.length; i++) {
    //console.log(wordArray[i])
    if (wordArray[i] == guessLetter) {
     // console.log("found!!")
      counter = counter + 1;
    }

  }

  if (counter > 0) {
    //console.log("function found the letter \"" + guessLetter + "\" " + counter + " times")
    return (counter)
  } else {
   // console.log("function did not find letter")
    return (counter)
  }

}

//console.log(sendWord(word));


//console.log(sendWord("excellent"));

module.exports = sendWord;


