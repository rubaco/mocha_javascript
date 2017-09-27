(function() {

function palindromesBool(word){

 
  //console.log(word);

  wordReversed = word.split("").reverse().join("");
  //console.log("reversed " + wordReversed);

  if (word == wordReversed) {
   // console.log("its a palendrome")
    return true;
    }
    else {
   // console.log("its not a palendrome")
    return false
    }


  }

//console.log(palindromesBool("bob"))
//console.log(palindromesBool("ted"))
module.exports = palindromesBool;


})();
