class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

class ColoredCircle extends Circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let coloredCircle = new ColoredCircle('blue', 5);
console.log(coloredCircle.getColor());


// Shape Class:
// It has a constructor method that takes a color parameter and assigns it to the color property of the instance.
// It has a method getColor() that returns the color of the shape.

// Circle Class:
// It extends the Shape class, inheriting its properties and methods.
// It has a constructor method that takes both color and radius parameters. It calls the superclass's constructor using super(color) to set the color, and it sets the radius property.

// ColoredCircle Class:
// It extends the Circle class, inheriting its properties and methods.
// It has a constructor method that takes color and radius parameters. It calls the superclass's constructor using super(color, radius) to initialize the color and radius properties.

// Instantiation and Method Call:
// An instance of the ColoredCircle class named coloredCircle is created with the color "blue" and radius 5 passed to its constructor.
// The getColor() method of the coloredCircle object is called, which returns the color of the circle.
// The returned color ("blue") is then logged to the console.