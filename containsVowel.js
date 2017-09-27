function getContainsVowel(word){
    
    wordArray = word.split("")
        for (let i = 0; wordArray.length; i++)
            if (wordArray[i] == "a" | "e" | "i" | "o" | "u"){
                return true;
                break;
            }
            
            else{

            }
            return false;
    
    }
    
    module.exports = getContainsVowel;