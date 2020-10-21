//ES6 JS Classes
//personal notes are in green
//? Module Notes are in Blue

//? For some reason this file acts dumb!!!!!
//? Like Actually kinda rattled


class User {
    constructor(name) {
        this.name = name;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    //Method 3
    status(){
        console.log('Current status: ' + this.type);
    }
    
}
class TrialUser extends User {
    constructor(name){
        super(name);
    }
    trialEnding() {
        console.log(`You are boy wonder ${this.name}`)
    }
}
//Personal pracitce testing
let works = new TrialUser('tom smith')
works.trialEnding();





class BannedUser extends TrialUser {
    beGone(){
        console.log(`how dont you like movies, ${this.name} thats too much man`)
    }
}

let bob = new User('tommy');
bob.greet();
bob.trialEnding();


//? Instance of the class/new object
let anonDude = new User("Anonymous dude");

//? we can now use the instance and the . operator
//? to access the 2 methods

anonDude.greet();
anonDude.status();

//? Another instance of the class
let anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

//? Another instance of the class
let jeff = new User("Jeff");
jeff.greet();
jeff.status();

let tom = new User('Tom');
tom.greet();
tom.status()

class User2 {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let firstUser = new User2("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(firstUser.first); // returns undefined
console.log(firstUser.l); // returns O'Connor
console.log(firstUser); //User2 { f: 'Paul', l: "O'Connor", email: 'poconnor@elevenfifty.org' }

//? Practice
//? You don't really understand this concept until you go write classes of your own. Try writing a Player class with three properties of name, number, and average points. Or try writing a Car class with make, model, and year. Whatever you do, make sure you have a firm grip on constructors before you go on. You can do all this in the same file.

class Player  {
    constructor(name, number, avgPoints) {
        this.name = name,
        this.number = number,
        this.avgPoints = avgPoints
    } 

    getNameAndNumber(){
        console.log(`${this.name} is a baller and he wears ${this.number}`)
    }



}

let mike = new Player('Michael Jordan', 23, 30);
let isEngineOn = true;
class Car {
    constructor(make, model, year) {
        this.make = make,
        this.model = model,
        this.year = year
    }

    startEngine(){
   
        console.log(`Starting the beautfil engine of a ${this.year} ${this.make} ${this.model}`)
    }

    

}

let hondaPilot = new Car('Honda', 'Pilot', 2006);
hondaPilot.startEngine();

class UsedCar extends Car {
    constructor(make, miles) {
        super(make);
        this.miles = miles

    }

    mileage(){
        console.log(this.model)
    }

}
let theHonda = new UsedCar( 'pilot', '100')
theHonda.mileage();