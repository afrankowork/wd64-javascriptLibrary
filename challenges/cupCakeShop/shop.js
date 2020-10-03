const Cupcake = require('./cupcake')

class Shop {
    constructor(location, owner) {
        this.location = location;
        this.owner = owner;
    }

    getLocation() {
        console.log(`This shop is at: ${this.location}`);
    }

    getOwner() {
        console.log(`This shop is owned by: ${this.owner}`)
    }

    changeOwner(newOwner) {
        this.owner = newOwner;
    }

}

class cupCakeShop extends Shop {
    constructor(location, owner, name) {
        super(location, owner);
        this.name = name;
        this.inventory = [];
        this.cash = 0;
    }

    bakeBatch(count, batter, icing, price) {
        // Make COUNT cupcakes, add them into inventory
        for (let i=0; i < count;i++) {
            let newCupcake = new Cupcake(icing, batter, price);
            this.inventory.push(newCupcake)
        }
    }
    
    sellCupcake() {
        //Remove Cupcake Inventory, increase cash by price of cupcake
        let soldCupcake = this.inventory.pop();
        this.cash += soldCupcake.price;
    }
}


let myShop = new CupcakeShop ('Broad Ripple', 'Bill Murray', 'Inzombia Cupcakes');

myShop.bakeBatch(12, 'Red Velvet', 'Honey Mustard', 4);

myShop.sellCupcake();
myShop.sellCupcake();
myShop.sellCupcake();

console.log(myShop.cash) ;

