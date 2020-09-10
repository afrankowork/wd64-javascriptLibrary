//Varialbes Practice

console.log('hello');

let a = 2;

/*
- let : is our KEYWORD
- a : is our Name of our variable
- = : is our Assignment Operator
- 2 : is our variable Value
*/

let b = 1;
console.log(a + b);

/* Keywords

var, let, and const

- var: 'old' keyword that stands for variable.  We wont be using these as often but it is still a viable one to use

- let: 'new' keyword for variable. (introduced with es6 * newest version of ecma script which is a standarization of JS)

-const: also "new" keyword that declares an unchangable, or constant, variable

*/

var var1 = 'var variable';
let var2 = 'let variable';
const var3 = 'const variable';

console.log(var1, var2, var3);

//Cannot use a reserved word in variable naming like function

//Declarations and Initializations

//Declarations are the left side of the assignment operator

let x = 10;


//Initializations are the RIGHT SIDE of the assignment operator, above 10 is the initialization

let y = 8 ;
console.log('declaration; ', y);

y = 10;
console.log('initialization:' , y);

y = 11;
y=12;
y=13;
console.log(y);

//Const
let today = 'Great!';
const efa = 'Wonderful!';

today = 'Awesome!';

//Use constants for things that should never be changed so if someone tries to change it breaks almost as if its protecting itself


console.log(today, efa);



