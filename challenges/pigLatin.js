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


let vowels = ['a','e','i','o','u'];
let pigStr = [];
let finalStr = '';
let str = '';

function pigLatin (words) {
    str = words;
    for (let i=0;i<str.length;i++) {
    if(vowels.includes(words[0]) == true) {
        
        words += 'ay'
        return words
    } 
}



    for(let j=0;j<str.length;j++) {
        pigStr += str[j];
    }

    for(let k=0;k<pigStr.length;k++) {
        
    }
}

console.log(pigLatin('these'));



    


