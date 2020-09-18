/*

* ***********
! Arrow Functions
* ***********

- Arrow functions are expressional functions that can be simplified into one of two forms, CONCISE and BLOCK BODY. The main
  goal is to generate shorter syntax for writing a function. 

* Arrow functions also do NOT get hoisted.

*/

function regFunc() {
    console.log('Regular');
}
regFunc();

//      (1)     (2)(3)       (4)
let arrowFunc = () => console.log('Arrow Func');
arrowFunc(); // still need to invoke our function


let arrowPrac = (words) => console.log(words);
arrowPrac('adam');

/*
  
  1. Arrow functions are ALWAYS anonymous. Look this up and see what this means. 
  2. Parameters are still capable of being injected.
        - if we only have one parameter, we technically dont need the parans ()
        - But if are not passing any parameters, it is required to denote ()
  3. This syntax tells JS that we are about to process function.
  4. Within this format, JS assumes the return statement.
*/
  let firstName = 'Jane';
let lastName = 'Doe';

function greeting(first, last) {
    console.log(`Hi, ${first} ${last}! Welcome back!`);
    console.log(`This is the first parameter ${first}`);
    console.log(`This is the last parameter ${last}`);
}

//Func3 if you have comment out 'greeting(firstName)' you will see that parameter and argument dont know how to communicate 
//Rather understand that if you pass one argument it will always match up to the parameter regardless of naming
//Think of parameters like (firstArgumentSent, secondArgumentSent, thirdArgumentSent)


greeting(firstName, lastName)

//? CONCISE VS BLOCK BODY

// Concise:

let cBody = (x, y) => console.log(x+y);
cBody(1,2);

let slightlyComplex = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them`)

slightlyComplex(3,1);
slightlyComplex(1,5);

//* Block:
// The 'return' keyword IS required. We also include the curly braces.

let blockArrow = (x,y) => {
    return `${x} are within a ${y}`;
}

console.log(blockArrow('We','Block Body'));

let sampleBlock = x => {
    console.log(x);
}

sampleBlock(99)