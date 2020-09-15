/* 
* ***
? Hoisting
* ***


    What is Hoisting?
        - JS pulls all variables and functions calls to the 'top' of their respective scope prior to being executed.
        -Only the declaration is pullup, NOT the assignment.

*/

// console.log(hoistedVar);

// console.log('How JS hoistedVar: ', typeof hoistedVar);
// var hoistedVar = 'using var';
// let hoistedVar = 'using let';

//Here noticed that let will break the code and thats what you want, basically let informs you that this is not quite right
//VAR allows for these 'bad' undefined variables


//Javascript file is read in 2 passes so it reads all the names of functions and such but then on the second pass it executes 


//? Hoisiting in a Function
// This process is considered the same within a function. On the first pass, it reads it, puses the declarations to the top and then executes them in order that they are writtem.

function testHoist() {
    becomesGlobal = "not"
    console.log('Prior to declaring ', insideFunc);
    var insideFunc = 'Rules still apply here';
    console.log(insideFunc)
}
testHoist();
console.log(becomesGlobal);

//Hoisting is bad. However the point of this lesson is to show you an example of it to help identify not inspire to create hoisiting mistakes

//? Using LET
// the keyword 'let' is block scoped and not function scoped.

console.log(letVariable);
let letVariable = 'Using Let';
// This throws a ReferenceError due to ES6 not accepting undeclared variables. This is to ensure we ALWAYS declare our variables first

//? Hoisting Function
// Function Declarations:

hoistedFunc();

function hoistedFunc() {
    console.log('this is a hoisted function');
}

//Function Expressions:
// These are NOT hoisted.

expressionFunc();

let expressionFunc = function () {
    console.log('Works?');
}

// let keyword was introduced to fix dum dum mistake var causes with hoisting
// Hoisting can happen with functions as well but if you put function in variable with let it will prevent hoisting.