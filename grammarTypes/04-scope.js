/*
* *
? Scope
* *


What is scope?
    - scope is how a computer keeps track of all the variables in a program.
    - scope can also be nested, where there's an outer scope (global) that encloses an inner scope. 
    - If the functions are nested you can access any local variables within those functions however you can not reach them if you are on the outside
    - If the variables have the same name it goes to the most furthest in nested then works its way out
*/

let scope = 'Earth';// this is currently in the global scope of our JS file.
let words = 'bleh'


function localScope() {
    let scope = 'Indiana'; // the state (local) within the JS 'World/Globe'
    console.log(`${scope} marks the local scope`);

    function veryLocalScope() {
        let scope = 'Indianapolis';
        console.log(`${words} is right here`);
    }
    veryLocalScope();
};

console.log(`${scope} marks the global scope.`)
localScope();

// Scope Chain: If a variable is not found, JS attempts to locate the requested information outside.
//? ORDER MATTERS
// Javascript reads from top-bottom and acts accordingly to what is being asked. JS is known as a single-threaded language which means it can only execute a single task at a time.

let ordered = 1;

function layerOne() {
    let ordered = 2;

    function layerTwo() {
        let ordered = 3;
        console.log(ordered);
    }

    layerTwo();
    console.log(ordered);
}

layerOne();
console.log(ordered);

//Reminder to not use VAR however at first job and you realize that guy before may have been using VAR it will help to understand
//? Reassignments / VAR vs LET
// - var is scoped to the nearest function block.
// - let is scoped to the nearest enclosing block.

let a = 10;

function reassign() {
    a = 30;  // we are keeping this variable open and, with the 'let' keyword, we are capable of changing the value that is currently being help within that variable
    console.log(`a is being set to ${a} in this function.`);
}

console.log(`Before reassinging function: ${a}`);
reassign();
console.log(`After reassinging function: ${a}`)

var x = 2;

function varScope() {
    var x = 4;
    if(true) {
        var x = 5;
        console.log(x);
    };
    console.log(`Var Block Scope:${x}`)
}

console.log(x);
varScope();

// statements like 'if' or loops don't create a new scope. If  a variable is defined inside a block statement, it will remain in that scope. However, we can utilize let and const as keywords to help us control how our variables are viewed.

