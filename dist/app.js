class Car {
    // захищаємо масив через гетер
    get arr() {
        return this.array.map(g => g);
    }
    constructor(a) {
        this.array = a;
    }
}
const car1 = new Car(['d', 'dd', 'cwcw']);
car1.arr.push('scc');
car1.arr.push('scc');
console.log(car1.arr);
//# sourceMappingURL=app.js.map