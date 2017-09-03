(function(){

var word = "ironnnnnnyard"
var counter = 0;

wordArray = word.split("")
console.log(wordArray);

for (var i = 0; i < word.length; i++) {
  console.log(wordArray[i])
  if (wordArray[i] == "x"){
    console.log("found!!")
    counter = counter + 1;
  }

}

if (counter > 0)
 {
      console.log("found" + counter)
}

else{
  console.log("letter not found")
}





  })();
