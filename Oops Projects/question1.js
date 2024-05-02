class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Buddy');
dog.speak();

// Animal Class:
// It's defined using the class keyword and named Animal.
// It has a constructor method that takes a name parameter and assigns it to the name property of the instance being created.
// It has a method named speak() which simply logs a message saying that the animal makes a noise.

// Dog Class:
// It extends the Animal class using the extends keyword. This means that Dog inherits properties and methods from Animal.
// It overrides the speak() method inherited from Animal with its own implementation. In this case, the speak() method for a dog logs a message saying that the dog barks.
// Instantiation and Method Call:

// An instance of the Dog class named dog is created with the name "Buddy" passed to its constructor.
// The speak() method of the dog object is then called, which triggers the overridden speak() method from the Dog class. As a result, it logs "Buddy barks." to the console.