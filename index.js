// // Your code here
// Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will represent each side of a shape.
// Use the get keyword to make a getter method countSides that counts the number of sides (each index in the array).
// Use the get keyword to make a getter method perimeter that calculates the sum of each side (each index in the array) of the polygon. This method will become accessible to its child classes.

// Define a Triangle class that inherits from Polygon.

// It will automatically have access to count and perimeter inherited from Polygon.

// Use the get keyword to make a getter method isValid that checks if the given 3 sides for a triangle is valid.
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((accumulator, nextValue) => {
      return accumulator + nextValue;
    }, 0);
  }
}

class Square extends Polygon {
  get isValid() {
    let a = this.sides[0];
    let b = this.sides[1];
    let c = this.sides[2];
    let d = this.sides[3];

    return this.countSides === 4 && a === b && b === c && c === d && d === a;
  }

  get area() {
    if (this.isValid) {
      return this.sides[0] ** 2;
    }
  }
}

class Triangle extends Polygon {
  get isValid() {
    return (
      this.sides[0] + this.sides[1] > this.sides[2] &&
      this.sides[0] + this.sides[2] > this.sides[1] &&
      this.sides[1] + this.sides[2] > this.sides[0]
    );
  }
}
