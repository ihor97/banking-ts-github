class Car {
    constructor(a, b = 'стандарт') {
        this.name = a;
        this.number = b;
    }
    getInfo() {
        return `машина ${this.name}, с госномером ${this.number} `;
    }
    static compare(car1, car2) {
        Car._i++;
        return car1.name === car2.name && car1.number === car2.number;
    }
}
let car1 = new Car('cddc', 'первая');
let car2 = new Car('cddвввc', 'вторая');
console.log(Car.compare(car1, car2));
//# sourceMappingURL=app.js.map