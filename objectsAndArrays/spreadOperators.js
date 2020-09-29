/*


?   Syntax


-   keyword varName = [...arrayName];
 

*/

const nameOne = ['Eric', 'Winebrenner'];
const nameTwo = ['Zach', 'Maynard'];
const copiedNames = ['Adam', 'Jayne', ...nameOne, ...nameTwo]
console.log(copiedNames);
//Here you put in the actual content and it stays as one array



const copiedNamesDiff = ['Adam', 'Jayne', nameOne, nameTwo];
console.log(copiedNamesDiff)
//here it inserts the items nameOne and nameTwo as arrays into this creating arrays within the array

/**
    Since the spread operator is pulling out all items of an array, we need to make sure we use the spread operator within a new array. This is so the values that were pulled out gets placd into our new array.
 
    ...arrName

    - We can add to our original array without altering our copied array.
        - dependent on what data types we are using. 


 */

    nameOne.unshift('Mr');
    console.log('Altered: ', nameOne, 'Spread: ', copiedNames);


/**

*?          Numbers

 */

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 5.49];



console.log(Math.min(prices));
//Returns NaN because it is passed an array and not numbers

console.log(Math.min(...prices));
//Spread Op pulls elements out of the prices array to allow the min method to work.



/** 
 * ******** 
 * ?        Objects
 * ********
 */


 const persons = [
     {
         name: 'Lore',
         species: 'Android'
     },
     {
         name: 'Picard',
         species: 'Human'
     }
 ]
 
 const copiedPerson = [...persons];
 persons.push({name: 'Worf', species: 'Klingon'});


 console.log('Obj', persons, 'SO', copiedPerson);

 /* 
    - primitive variable = primitive value 
        ex 
            let x = 10;
            let y = 'blah';
            let z = true;
            let zz = null;

    - JS stores to memory both variable and values:
    Variables       Values
    x               10
    y               'blah'
    z               true
    a               null

    let a = x;
    let b = y;
    console.log(x,y,a,b) -> 10, 'blah', 10, 'blah'

    altering one would'nt affect the previous
    a = 5;
    b = 'xyz'
    console.log(x,y,a,b) -> 10, 'blah', 5, 'xyz'

    - 3 Data Types that are passed by reference: Array, Functions, and Objects
        - technically objects.
        - non primitive variables are given a reference to the value -  the reference points to the location in memory.

        * pretend datatype: address - denoted by < >

        let arr = [];
        arr.push(1);

        - How our code would look in memory:

        VARIABLES    VALUES     ADDRESS    OBJECT
        arr          <#001>     #001       []
        arr          <#001>     #001       [1]

        let ref = [1];
        let refCopy = ref;

        -Memory: 
        Variables     Values    Address    Object
        ref           <#001>    #001         [1]
        refCopy       <#001>    
 */
let ref = [1];
let refCopy = ref;
ref.push(1);
console.log(refCopy);

let x = 'a';
let b = x;
x = 12;
console.log(b);

//Good example above. Shows how when you update ref then try to console.log(refCopy) because it is looking for a reference to the container of sorts rather below when you try to log b it has been assigned an intial value and it justs takes the value rather than taking it as a connection to x

/**
 * 
 * 
 * ?            Avoiding changing both the original and copied array
 * 
 */

 const comics = [
     {title: 'Spider-Man', year: 1962, rating: 75}, {title: 'Detective Comics', year: 1939, rating: 45}
 ];

 //Map is like grabbing select things you want from array. Understanding so far is that map makes a copy of the array essentially thats assigned to a variable so that you can work with the information in the array without changing it all
 const copiedComics = comics.map(comic => ({
     title: comic.title,
     year: comic.year
 }));

 comics.push({title: 'Calvin and Hobbes', year: 1985});
 console.log('Before Altering: ', copiedComics);
 copiedComics[1].title = 'Detective Comics #27';
 console.log('After Altering: ', comics, copiedComics);


