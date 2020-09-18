/* 
* ***
? ARRAYS
* ***
*/

//? POPULATING AND REFERRING

let list = ['orange', 'banana', 'ores'];
console.log(list[1]);

// JS counts starting at 0. So in this array, it would be 0-2
// When we call an array, we can append square brackets onto the end of our array with the index number we want to reference. This is SQUARE BRACKET NOTATION.

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];
//console.log(typeof students); to show that arrays are technically objects
//console.log(students instanceof Array); verifies that indeed it is an array may be important when you go test
 

console.log(students instanceof Object);
//here you can see that both are true
console.log(students instanceof Array);

//? Random but Primitive Operators are number, string, boolean, etc...

console.log(students[2]);
/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/
let student = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];
console.log(`Hello ${student[1]}!`);
console.log(`Hello ${student[6][2]}!`)
// So here if you have an array within an arry and you want to access data within the second array you need to first list the first index
// of the second array and then the second argument is the index position of the thing we want in the 2nd array

//? ARRAY METHODS

// We have multiple methods to allow us to manipulate arrays as we may need.
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (foodItem of food) {
    console.log(foodItem);
}

//Add to our array, appends to the end of the array
food.push('Pizza');
console.log('push:', food);

//Remove and insert, seems more useful to place one specific item
food.splice(1, 1, 'Bananas');// Removes Shrimp and add Banana => (position, how many to remove, what to add)
console.log('splice: ', food);

food.splice(2,0,'Sweet Potato Pie'); //Puts Sweet Potato Pie in and at position 2 and backs up the old position 2 to position 3
console.log('splice 2: ', food);

//Remove from end
//will always remove the last item
food.pop();
console.log('pop: ', food);

//Adds to the start
food.unshift('Popcorn', 'Steak'); //unshift adds one or more elements to the beginning of the array
console.log('unshift: ', food);

//Remove from start
food.shift(); // shift removes the first element in array
console.log('shift: ', food);

//? LENGTH

//We can use a method called length() that can tell us how many values are within our array.

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length);


console.log(colors);
console.log(colors.toString());


//? ITERATING
/*
    forEach - 
        - the forEach() method executes a provided function once for each element in an array - much like a for loop or a for of loop.

        - runs three arguments:
            1. The Value
            2. The Index
            3. The array object itself
*/

// arrayObject.forEach(value, index) => return);

let foodList = ['apple', 'pear', 'mushroom', 'cheese', 'peach'];

//for(let i = 0; i < foodList.length; i++) {
//    console.log(foodList[i]);
//}

//We invoke callback function for each element within our array
foodList.forEach(foodItem => console.log(foodItem));

//A callback function is another function we invoke within our main function

// function print(callback) {
//     callback();
// }

foodList.forEach((foodItem, object) => {
    console.log(foodItem);
    console.log(object);
})
// - the second position of the parameter is always the index


/*
! CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ['shawshank redemption', 'Grown-Ups', 'IT', 'CaddyShack'];

movies.forEach((movieTitle, index) => {
    console.log(movieTitle);
    console.log(index);

});

movies.push('National Treasure');
console.log(movies);

movies.splice(1,1,'This is the End');
console.log(movies);

movies.forEach((movieTitle, index) => {
    console.log(movieTitle);
    console.log(index);
})
