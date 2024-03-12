class Circle {
  draw() {
    console.log("draw circle");
  }
}

class Square {
  draw() {
    console.log("draw square");
  }
}
// sukurta nauja klase, kuri grazina esama - nauja klase pagal paduoda uzklausima
class ShapeFactory {
  // static leidzia kreiptis tiesiai i klases metoda, nekuriant naujo instanco. tas metodas ir sukuria nauja instanca, pagal uzklausa
  public static getShape(shapeType: string) {
    if (shapeType === "circle") {
      return new Circle();
    }
    if (shapeType === "square") {
      return new Square();
    }

    return null;
  }
}
const circle = ShapeFactory.getShape("circle");

const square = ShapeFactory.getShape("square");
