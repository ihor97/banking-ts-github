class Car {
    set name(g) {
        // можна робити форматування this._name = g+'eee'
        this._name = g;
    }
    get name() {
        // заьираємо добавлені значення this._name.replace('aaa','')
        return this._name;
    }
    constructor(a) {
        this._name = a;
    }
}
const a = new Car('1');
console.log(a.name);
//# sourceMappingURL=app.js.map