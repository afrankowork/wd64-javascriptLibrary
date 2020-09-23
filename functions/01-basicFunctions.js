/*

! Functions

functions are a process that we call upon to run an action.
- Take in input so that it can process it, modify it or just respond to it.
- Returns a value (but not always)
- Can be invoked (called upon ) as often as we need.


*/

function hi(){
    console.log('Hi!');
}

hi();

//1: Keyword
//2: Name of the function and the parenthesis for the parameter.

// (1)     (2)      (3)
function functionName() {
    
        //(4)
    
};
    //(5)
functionName()

/*
    - 1: Keyword "function"
    - 2: Name of "functionName"
    - 3: Parameter "currently empty"
    - 4: Statement "to process"
    - 5: Invoke or call "on switch"

   ! Function Declaration
   A chunk of code that performs a set action when it is invoked
*/

function funcOne() {
    console.log('Statement Here');
}

funcOne();


//? Function Expression
// Assigning a function to a varaible is what is called an Expression

let first = function funcTwo() {
    console.log('Second Statement');
}
first();





//? Anonymous Function
// Anonymous Functions are stored in memory but the runtime doesn't automatically create a reference to it.

let anon = function() {
    console.log('anon function')
}

anon();

//? Parameters
// Allow us to accept information already declared.

function parameterFunc(num) {
    console.log(num);
}

parameterFunc(2);
parameterFunc(9);
let returnedVal = 5;
parameterFunc(returnedVal);


