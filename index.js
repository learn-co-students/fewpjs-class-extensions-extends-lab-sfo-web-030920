class Polygon {
  constructor(arrayOfSides) {
    this.sideLengths = arrayOfSides;
  }

  get countSides() {
    return this.sideLengths.length;
  }

  get perimeter() {
    if (!Array.isArray(this.sideLengths)) console.log("Not an array");

    return this.sideLengths.reduce((acc, side) => acc + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (!Array.isArray(this.sideLengths)) console.log("Not an array");
    if (this.countSides !== 3) return console.log("Has to have 3 sides");

    const [a, b, c] = this.sideLengths;

    // > operator returns boolean and && returns that boolean value, so don't need to write if statements
    return a + b > c && b + c > a && a + c > b;
  }
}

class Square extends Polygon {
  get isValid() {
    if (!Array.isArray(this.sideLengths)) console.log("Not an array");
    if (this.countSides !== 4) return console.log("Has to have 4 sides");
    const [a, b, c, d] = this.sideLengths;
    return a === b && b === c && c === d && d === a;
  }

  get area() {
    if (!Array.isArray(this.sideLengths)) console.log("Not an array");
    if (this.countSides !== 4) return console.log("Has to have 4 sides");
    const sideLength = this.sideLengths[0];
    return sideLength * sideLength;
  }
}
