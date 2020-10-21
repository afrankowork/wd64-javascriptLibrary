let uppperCase = false;
let lowerCase = false;
let reFormat = '';

function changeCase (sentence) {
    for (letter of sentence) {
        if (letter == letter.toUpperCase()) {
            letter = letter.toLowerCase();
            reFormat += letter
        
        } else {
            letter = letter.toUpperCase();
            reFormat += letter
        }
    }  return reFormat 
}

