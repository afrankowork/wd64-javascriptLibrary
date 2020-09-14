//? For Loops 

/*
    - Loops help us repeat a process without writing a lot of code

    We need to:
        1) Create an Index
        2) Run a condition
        3) Change to the indexing variable (execution of condition)

*/

for(let i = 0; i <= 10; i++){
    console.log(i);
}


/*

    - We start our loop with a 'for'.
    - Within this function, we ar einjecting some parameters that JS will rung against
        (index; condition; change index -> result)
        for(create index variable); run condition; change index) {
            return results

        }

*/

let i = 10;
for(i;i<=20;i+=2){
    console.log(i);
}

//! Challenge:

for(let i=2; i > -10; i-=4){
    console.log(i);
}

let word = 'supercalifragilisticepialidocious';


//you can run through a list of information if you do not know where or how much information is present and you can cycle through it all
//and identify

//Here he runs through the length of the mary poppins word above and is logging the letter and their index by putting them side by side
for (let i=0; i < word.length; i++){
    console.log(i, word[i]);
}

//? FORIN Loop


//Prints out all the keys in the object, this for loop seems very similar to python
//The second console shows all the items in the pairs and list them each individially on a line
let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
};

for(info in city) {
    console.log(info)
    console.log(city[info]);
}

/* 
    for( variable IN object) {
        <statement>
    }
*/

//These loops seem that they always give the index as initially just checking for the 'item' just gives you a list of indexes 
//while writing list[item] you are given the actual names of the foods on the list


let list = ['milk', 'eggs', 'beans', 'bread', 'bananas'];

for(item in list) {
    console.log(list[item]);
}

//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.
/*
for (letter in name) {
    if (letter == 0){
        console.log(name[letter].toUpperCase());
    } else {console.log(name[letter].toLowerCase())}
}
*/
let name2 = 'tomMy';
let newName = '';

for (letter in name2) {
    if (letter == 0){
        newName += (name2[letter].toUpperCase());
    } else { newName += (name2[letter].toLowerCase());
    }
}
console.log(newName);


//? FOROF LOOP
// Looks like this one will print out the actual item rather than the index position
// These have to have a number value attachd to it thats why objects will make it break 
// As they can have keys attached to them, strings work because they have index numbers

/*

    - In order to runa for of loop, the 'thing' must be numbered like an array
    let object = {
        key: value,
        key: value,
        key: value
    }
    for(o of object) {
        <breaks>
    }
 */   

//for of allows you to run through an array or string and will list the actual item not the index number associated with it

 let indexArr = ['spot 1', 2, true, 'four'];
 let jane = 'bigdawg';

 for (pos of jane) {
     console.log(pos);
 }

 /*
  ? Quick Recap:
  for loop: loops through block of code until the counter reaches a specified number.
  for in loops: loops through properties of an object.
  for of loops: loops over iterable objects as in arrays and strings *strings can be accessed much in the same way as arrays.
  
  */

