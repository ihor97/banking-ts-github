// Open closed principle
// класи відкриті для розширення але закриті для модифікацій
var Shape;
(function (Shape) {
    Shape["square"] = "SQUARE";
    Shape["circle"] = "CIRCLE";
})(Shape || (Shape = {}));
var incorrect;
(function (incorrect) {
    class Square {
        constructor(sideSize) {
            this._type = Shape.square;
            this._sideSize = sideSize;
        }
        get sideSize() {
            return this._sideSize;
        }
        get type() {
            return this._type;
        }
    }
    class Circle {
        constructor(sideSize) {
            this._type = Shape.circle;
            this._radiusSize = sideSize;
        }
        get sideSize() {
            return this._radiusSize;
        }
        get type() {
            return this._type;
        }
    }
    class Calculator {
        constructor(shapes) {
            this._shapes = [];
            this._shapes = shapes;
        }
        calculateAllAreas() {
            return this._shapes.reduce((acc, shape) => {
                if (shape.type === Shape.circle) {
                    acc += Math.PI * shape.sideSize ** 2;
                }
                // якщо ми захочемо додати якусь фігури треба буде давати ще один if
                if (shape.type === Shape.square) {
                    acc += shape.sideSize ** 2;
                }
                return acc;
            }, 0);
        }
    }
    const res = new Calculator([new Square(5), new Circle(0)]);
    console.log(res.calculateAllAreas());
})(incorrect || (incorrect = {}));
var correct;
(function (correct) {
    class Shape {
    }
    class Circle extends Shape {
        constructor(sideSize) {
            super();
            this._sideSize = sideSize;
        }
        getArea() {
            return Math.PI * this._sideSize ** 2;
        }
    }
    class Square extends Shape {
        constructor(sideSize) {
            super();
            this._sideSize = sideSize;
        }
        getArea() {
            return this._sideSize ** 2;
        }
    }
    class AreaCalculator {
        constructor(shapes) {
            this.shapes = [];
            this.shapes = shapes;
        }
        calculateAllAreas() {
            this.sum = this.shapes.reduce((acc, e) => acc += e.getArea(), 0);
            return this.sum;
        }
    }
    const res = new AreaCalculator([new Square(5), new Circle(0)]);
    console.log(res.calculateAllAreas());
})(correct || (correct = {}));
//# sourceMappingURL=app.js.map