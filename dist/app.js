// Liskov Substitution principle
// якщо P являється підтипом Т то ми можемо підставити тип P в замість типу T без всяких негативиних наслідків для програми
var incorrect;
(function (incorrect) {
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        setWidth(width) {
            this.width = width;
        }
        setHeight(height) {
            this.height = this.height;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    class Square extends Rectangle {
        constructor(size) {
            super(size, size);
        }
        setWidth(width) {
            this.width = width;
            this.height = width;
        }
        setHeight(height) {
            this.height = this.height;
            this.height = height;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const testShapesSize = (rect) => {
        // для квадрата цей тест зламається так як спочатку ставиться значення 10 а потім 5 
        rect.setHeight(10);
        rect.setWidth(5);
        return rect.getArea() === 50 ? 'correct' : 'failed';
    };
})(incorrect || (incorrect = {}));
var correct;
(function (correct) {
    class Square {
        constructor(width) {
            this.width = width;
        }
        setWidth(size) {
            this.width = size;
        }
        getArea() {
            return this.width ** 2;
        }
    }
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        setWidth(size) {
            this.width = size;
        }
        setHeight(height) {
            this.height = height;
        }
        getArea() {
            return this.width ** 2;
        }
    }
    const testRectSize = (rect) => {
        rect.setHeight(10);
        rect.setWidth(5);
        return rect.getArea() === 50 ? 'correct' : 'failed';
    };
    const testSquareSize = (square) => {
        square.setWidth(10);
        return square.getArea() === 100 ? 'correct' : 'failed';
    };
})(correct || (correct = {}));
//# sourceMappingURL=app.js.map