
function getLongestWord(word){
    
    myString = word.split(" ")    
    
    
    let largest = "a";
    
    for (let i=0; i < myString.length; i++){
        
        if (myString[i].length > largest.length){
            largest = myString[i];
        }
    }

        return largest;
    
    
}
    
    module.exports = getLongestWord;