//? Data Structures and Types



//A boolean has two possible values true/false

let on = true;
let off = false;
console.log(on);


//? NULL 
//could be thought of an empty container that has space to fill
//think about it as an intentionally empty value
//if you have a user create function and lets say it takes a username and password, and if a password is compromised as in a hacker has gained access
//to then it could set it to  null to then make sure to send a notice to the user however if undefined is used could lead to thinking that
//there is a bug in the code, intentional nothing is null


let empty = null;
console.log(empty);

//Undefined
// No value has been assigned to a container

let undef = undefined;
console.log(undef);

let password;
console.log(password);

/* 
    -Null is like a container with nothing in it.
    -Undefined is when a variable has never been set, or hasn't been created yet.
    -Null you can trust, and undefined you can not
*/

//? Numbers

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);
// JS gives us space for 15 9s before rounding up

let notQuite = .2 + .1;
console.log(notQuite);

// JS rounds out at a certain number, so if math is needed, be aware.
if (notQuite == .3) {
    console.log('Yay');
} 
// As you can see you need to be careful with decimal numbers 
// A long workaround is

let whatIf = (.2*10 + 0.1*10);
console.log(whatIf);
let numbersAreHard = (.2*10 +.1*10) / 10;
console.log(numbersAreHard);

//? Strings

// Strings represent text and are wrapped in either single or double quotes.

let doubleQuote = "big";
let singleQuote = 'single';
console.log(doubleQuote, singleQuote);

let nonEscape = "I've";
let escape = 'I\'ve';
console.log(nonEscape,escape);

let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);

console.log(typeof addThese);
console.log(typeof addTheseAlso);
//Concatentation but in JS

//We can use an operator called 'typeof' that returns a string that tells us exactly what our variable "type" is. 

//If you highlight code you can just click fn + f8 to run it cuz of node.js

//Number constructor such as 'Number' allows you to change a string to a number

let stringToNumber = Number('1150');
console.log(typeof stringToNumber);

// Here const allows variables to not change and create a shortcut to console.log

//? const log = console.log;
//? log('test');

//? Objects
/*
    -Objects are a single value that can hold multiple values
    -Consider these as a collection of various properties
    -denoted by curly brackets: {}

*/

let frodo = {
    race: 'hobbit', // string
//  (1)     (2)
    rings: 1, //number
    sting: true//boolean
}

console.log(frodo.race);
console.log(typeof frodo);

//1: Key
//2: Value
//A car dealership may use an object to store all the information about a specific car model
//Objects are a way to represent something that is 'real' in code get VERY comfortable with them


//? Arrays
/*
    - Containers that hold a list of items.
    - denoted by square brackets: []
    - all items are within the square brackets.
    - regardless of datate, each item is separated by a comma.


*/

let arrayList = ['pos 1', 'pos 2', 'pos 3'];
console.log(arrayList);

let list = ['item1', 'item2'];
console.log(typeof list);
//JS classified arrays as objects and not a datatype of their own.
//Arrays are built into JS using objects they are different but definetly helps understand

let car = [{
    make: 'Honda',
    mileage: '60mpg',
    color: 'White'
    }
]
console.log(car);
//You can put objects in arrays and may be important as you can order all those objects with an array

//? Addition vs Concatenation

/* 

    -JS sees the "+" symbol in two different ways.
    - When combined with numbers, uses built-in math functionality.
    - When combined with strings, it ignores the math and concats the two strings.

    */

//So if javascript finds a number first then it will change it to string to concat it rather than turn the stirng into a number
//Try to be as clear as possible


let concatDiff = 1050 + '100';
console.log(concatDiff);    

let concat123 = '100' * 1050;
console.log(typeof concat123);

/*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = 'Adam';
let lastName = 'Frankowski';
let houseNumber = 10506;
let street = 'Saddlestone Drive';
let city = 'Fishers';
let state = 'Indiana';
let zipcode = 46040;

console.log(firstName + ' ' + lastName + '\n' + houseNumber + ' ' + street + ' ' + '\n' + city + ', ' + state + ' ' + zipcode);

//? STRING PROPERTIES

/*

    - strings have properties, or the qualities associated with that string.
    - the length of a string is a property.
    
*/

let myName = 'Adam';
console.log(myName.length);


//? STRING METHODS  

/*
    - methods are tools that can help us manipulate our data

*/

let myRealName = 'Bobby';
console.log(myRealName.toUpperCase()); //this is a method that changes all the characters in a string to upper case.
console.log(myRealName.toLowerCase()); //this changes them to lowercase

let home = 'My home is Fishers';
console.log(home.includes('Fishers')); //allows you to check if something is included in a string


