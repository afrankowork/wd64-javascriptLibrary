//? Equal
console.log('3' == 3);
console.log('t' == 'T'); //false because equality is case-sensitive
// == is equal

/*
    - JavaScript is helpful and does something known as coercion when comparing values
        - coercion is the process of converting a value from one type to another.


*/



//? Strict Equal
console.log('3' === 3);
console.log(3 === 3);

// === is strictly equal checks type and value
// could be useful with passwords
console.log('Bob' === 'Bob');

//? Not Equal
console.log('3' != 3); //false, because coercion is happening and javascript is trying to help us by assuming the string is a number
console.log('35' != 3); //true

//? Strict Not Equal
console.log('3' !== 3); 

//? Greater than
3>2;

//? Less than
2<3;

//? Greater Than or Equal To
3 >= 2; // => is different than >= we will talk about it later fat arrow function

//? Less Than or Equal to
2 <= 3;


//? And only returns true if both are True and True
'a' && 'b';

//? Or returns true if a or b are true only returns false if they are both false
'a' || 'b';

let a = !4;
