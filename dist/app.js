// вказуємо класу з яким типом йому працювати при його створенні
class Example {
    constructor(id) {
        this._id = id;
    }
    getId() {
        return this._id;
    }
}
// показує класу з яким типом він має працювати
const example1 = new Example(3);
const example2 = new Example('eee');
//# sourceMappingURL=app.js.map