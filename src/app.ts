class Car {
    // тут в чистому вигляді інкапсуляція поля _name
    private _name: string

    public set name(g: string) {
        // можна робити форматування this._name = g+'eee'
        this._name = g
    }
    public get name() {
        // заьираємо добавлені значення this._name.replace('aaa','')

        return this._name
    }
    constructor(a: string) {
        this._name = a
    }


}

const a = new Car('1')

console.log(a.name);
