/*
* *******
! Constructor Functions
* *******
    - Functions allows us to easily create a unique solution for different circumstances by using parameters.
        - creating several different objects with the same keys but different values.


*/


//Wants to understand how awful it would be to manually type all this shit out
//Opt 1:
let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
};
let person2 = {
    name: 'Jeremy',
    age: 15,
    canVote: false
}
let person3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
};

//Opt 2
//For constructors you must capitilize so it can recognize that it is constructor
// (1)      (2)        (3)
function Person(name, age, canVote) {
//   (4)   (5)    (6)
    this.name = name;
    this.age = age;
    this.tomatoes = canVote
}
//            (7)    (8)
let student1 = new Person('James', 80, true);
console.log(student1.name);

/*

    1. The keyword (function)
    2. The function Name. For Constructor Functions, the name should be capitalized.
    3. The parameters. These will be the values of the object once this function is in use.
    4. The 'this' keyword.  'this' give us the ability to refer back to whatever called, or whatever activates it. in this case, 'this' refers to 'Person'
    5. This will be a key of the new object we will creaete. This is NOT refering to the parameter.
    6. This is refering to the parameter we pass through our constructor function.
    7 & 8:  This 'new' keyword is calling our Person function, creating a new person with the values we are passing as arguments, and storing that person in a variable.
    */

