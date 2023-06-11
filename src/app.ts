class Car {
    public number: string
    public name: string
    // приватне статичне поле можна використовувати тоді коли ми в рамках класах хочемо інкапсулювати логіку створених ним обєктів
    private static _array: Car[]
    constructor(a: string, b: string = 'стандарт') {
        this.name = a
        this.number = b
    }
    public getInfo(): string {
        return `машина ${this.name}, с госномером ${this.number} `
    }
    public static create(a: string, b: string = 'стандарт'): Car {
        let c = new Car(a, b)
        this._array.push(c)
        return c
    }
   
    public static compare(car1: Car, car2: Car): boolean {
        return car1.name === car2.name && car1.number === car2.number

    }
}
let car1 = new Car('cddc', 'первая')
let car2 = new Car('cddвввc', 'вторая')

console.log(Car.compare(car1, car2));
