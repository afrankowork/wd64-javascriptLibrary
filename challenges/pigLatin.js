/*
! PIG LATIN CHALLENGE (pair coding) - morning
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
    - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/

let words = 'adam';

let vowels = ['a','e','i','o','u'];
let newStr = '';
let oldLetter = '';
let newWord = [];
let finalStr = ''
let isVowel = true;
let consonantNumber = 0;
function pigLatin(str) {
    str = str.split(' ')
    
    for (word of str) {
        for(letter of word) {
            newWord += letter
        }
        if (vowels.includes(newWord[0])){
            newStr += newWord.substring(1) + newWord[0] + 'ay ';
            
            newWord = ' ';
        }
        else {
            while(isVowel) {
                
                newWord = Array.from(newWord)
                
                oldLetter += newWord.shift();
                if (vowels.includes(newWord[0])) {
                    for (item of newWord) {
                        finalStr += item;
                    }
                    oldLetter = oldLetter.replace(/\s/g, '');
                    newStr += `${finalStr}${oldLetter}ay`;
                    
                    newWord.splice(0, newWord.length);
                    finalStr = ' ';
                    oldLetter = ' ';
                    consonantNumber ++
                    

                    
                } else {console.log('nothin')}
                
            if(consonantNumber == 20) {
                isVowel == false;
             } 
         
    
    } console.log(newStr); 
    
    }
}
}
pigLatin(words);
