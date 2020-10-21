class Makes {
    constructor(make){
        this.make = make;
    }
    giveMeMake() {
        console.log(this.make)
    }
}

class Car extends Makes {
    constructor(make, model) {
        super(make);
        this.model = model 
    }

    newCar() {
        console.log(`well looky here you got nice ${this.model} made by ${this.make}`)
    }
}

let hondaAccord = new Car('honda', 'accord');
hondaAccord.newCar();