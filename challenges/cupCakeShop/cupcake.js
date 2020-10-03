// What should a cupcake have?
// Icing, Cake, Price

class Cupcake {
    constructor (icing, cake, price) {
        this.icing = icing;
        this.cake = cake;
        this.price = price;
    }

    getDescription() {
        console.log(`A ${this.icing} topped ${this.cake} cupcake for $${this.price}`)
    }
}

/*
APIE

- A = Abstraction: Simplify a complex process into an easy to interact interface. Hide complicated detail behind an easy interface, ex pressing gas pedal.
- P = Polymorphism: One interaction, with many implementations. (String.length, Array.length)
- I = Inheritance: Class hierarchy that share functionality and attributes   
- E = Encapsulation: Data and functionality to manipulate that data are bundled together.  A toaster functionality is completely encapsulated, and for a car most of the parts are encapsulated except for like key, operator, and gas.

- Further Investigation to be had and learn OOP programming such as python

*/


module.exports = Cupcake;