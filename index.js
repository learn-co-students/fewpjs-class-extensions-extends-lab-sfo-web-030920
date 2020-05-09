class Polygon {
  constructor(array) {
    this.sideLengths = [...array];
  }

  get countSides() {
    return this.sideLengths.length;
  }

  get perimeter() {
    return this.sideLengths.reduce((acc, side) => acc + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [a, b, c] = this.sideLengths;
    if (a + b > c && b + c > a && a + c > b) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    const [a, b, c, d] = this.sideLengths;
    if (a === b && b === c && (c === d) & (d === a)) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    const sideLength = this.sideLengths[0];
    return sideLength * sideLength;
  }
}
