//?     FALSY VALUES;
    /*
        - false
        - 0
        -'', "", ``
        -null
        -undefined
        -NaN (not a number)


        When  JS is expecting a boolean value and it is returnd with one of these 6 values, it is evaluated as "falsy"




    */

    
    //? IF
    /*

    
    
    */

    let light = 'on';
    
    if(light=='on'){
        console.log('The light is on');
    };

    if(light) {
        console.log('yessir')
    }
  
    let weather = 68;
    
    if (weather <= 70) {
        console.log('Wear a jacket');
    };

    let rain = false;

    
    //acknowledge you can just use the name of a variable if its boolean and true in the if statement
    //also if the boolean is set to false, you can throw a bang(!) infront of the variable to say its false when running the if statement
    //when there are multiple functions in the if statement you need to end each one with a ; however after the curly brackets the ; is for style


    if(weather < 70 && !rain) {
        console.log('it is a little chilly and will possibly rain.');
    };

    //? If Else

    let today = 75;

    if(today < 70) {
        console.log('wee bit nipply out at ' + today);
    }
    else {
        console.log('actually rater toasty at '+ today);
    }

/*
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let name = 'Adam Frankowski';

if (name == 'Adam Frankowski') {
    console.log('Hello my name is ' + name);
}
else {
    console.log('Hello, what is your name?');
}

if (name == 'Adam Frankowski') {
    console.log('whats goody im ' + name);
}
else {
    console.log('you is your name' + name);
}

/*

? ELSE IF

-If the first if statement is not met or true it moves to the first else if 
-Make sure to check logic and have it stagger correctly so for examples with cooking times they need to be descending becasue once a statement is true then it wont complete
anymore else if's or else
-Have to use `` with ${} placeholders. pretty conveinent to avoid using the + then variable name and so on
-Use the placeholders if putting variables in strings because it will be compilied faster than concatenation

*/

let cookTime = 35;

if (cookTime === 45) {
    console.log('Let us Feast!');
} else if (cookTime >=30) {
    console.log(`It has only been ${cookTime} minutes. Wait another 5 - 15 minutes. `);
} else if (cookTime >= 20) {
    console.log(`It has only been ${cookTime} minutes. Wait another 10 - 25 minutes. `);
} else {
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it...`)
}

//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 30;

if (age >= 25) {
    console.log(`You are ${age}, and you can rent a car!`);

} else if(age >= 21) {
    console.log(`You are ${age}, and you can drink!`);

} else if (age>= 18) {
    console.log(`You are ${age}, and you can vote!`);
} else {
    console.log(`Sorry you are only ${age}, and you cannot do anything!`);
}

/*

? TERNARIES

    - This is a quck way of considering an if/else statement. We are capable of writing out our conditional in a simple line.
    -quicker way to write if statements it looks like

*/

let myName = 'Adam Frankowski';

if (myName == 'Adam Frankowski') {
    console.log('Hello my name is ' + myName);
}
else {
    console.log('Hello, what is your name?');
}

if (name == 'Adam Frankowski') {
    console.log('whats goody im ' + myName);
}
else {
    console.log('you is your name' + myName);
}

// condition ? if true : else result

myName === `Adam Frankowski` ? console.log(`Hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}?`);
//condition             if true                                     else

let words = 'understand';
words == 'understand' ? console.log('dope') : console.log('try again boss');

//! CHALLENGE
// Take this if/else statement and make it into a ternary.
let lampOn = true;
let daytime = true;
if(lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
    console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}

//So basically ternary below in english is basically your giving an initial if, then if its true you console log but if its false it moves on to the next else if but if thats true it console logs but if its false it continues to move thru all the else ifs

lampOn == true && daytime != true ? console.log('The lamp is on during the night') 
: lampOn != true && daytime != true ? console.log('the lamp is off during the night') 
: lampOn == true && daytime == true ? console.log('the lamp is on during the day') 
: lampOn != true && daytime == true ? console.log('The lamp is off during the day ') 
: console.log('What lamp?');

console.log(`The lamp is ${lampOn ? "On" : "Off"} during the ${daytime ? "day" : "night"}`);

//? Switch

/*
    - executes a block of code depending on different cases
    -
*/    

let instructor = 'Adam';

switch(instructor) {
    case 'Ing' :
        console.log(`${instructor} is part of the Web Dev Team.`);
        break;
        // Once each case has been evaluated and we return a result, we need to note to 'break' out from our switch statement.
    case 'Zach' :
        console.log(`${instructor} is part of the Web Dev Team.`);
    case 'Josh' :
        console.log(`${instructor} is part of the Web Dev Team.`);
        break;
    default:
        console.log(`Sorry, I cant find what ${instructor} teaches at this time`)
        //Need to use a default to help us catch those cases when none are true similar to an else
     }


//Here you reassign instructor to have a value of Amanda
//Switches basically work like ifs but first you declare a variable such as instructor and then you check to see if instructor matches any of your cases if it does it will
//console log or do whatever you asked it to do there if not keeps moving after break

instructor = 'Amanda';

switch(instructor) {
    case 'Ing' :
    case 'Adam' :
    case 'Eric' :
    case 'Zach' :
    case 'Donovan' :
        console.log(`${instructor} is part of the Web Dev team.`);
        break;
    case 'Josh' :
    case 'Amanda' :
    case 'Casey' :
        console.log(`${instructor} is part of the Software Dev team`);
        break;
    default:
        console.log(`Sorry, I cant find what ${instructor} teaches.`)
}

//seems like i will avoid switches and try to mainly use if else and ternary but we will see