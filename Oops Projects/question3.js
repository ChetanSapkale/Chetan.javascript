class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getInfo() {
        return `${super.getInfo()}, Year: ${this.year}`;
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo());


// Vehicle Class:
// It has a constructor method that takes make and model parameters and assigns them to the respective properties of the instance.
// It has a method getInfo() that returns a string containing the make and model of the vehicle.

// Car Class:
// It extends the Vehicle class, inheriting its properties and methods.
// It has a constructor method that takes make, model, and year parameters. It calls the superclass's constructor using super(make, model) to initialize the make and model properties, and sets the year property.
// It overrides the getInfo() method of the superclass. The overridden method first calls the getInfo() method of the superclass using super.getInfo() to get the make and model information and then appends the year information.

// Instantiation and Method Call:
// An instance of the Car class named myCar is created with the make "Toyota", model "Camry", and year 2020 passed to its constructor.
// The getInfo() method of the myCar object is called, which returns a string containing information about the car's make, model, and year.
// The returned information is then logged to the console.