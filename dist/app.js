class Car {
    constructor(a) {
        this.array = a;
        // Object.freeze(a) варіант для того як зробити так щоб readonly не змінювалося
        // Object.freeze() -морозить тільки на першому рівні
    }
}
const car1 = new Car(['d', 'dd', 'cwcw']);
car1.array.push('scc');
console.log(car1.array);
//# sourceMappingURL=app.js.map