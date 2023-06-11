class Car{
      // readonly можна юзати тільки всередині класу 
        // приватне статичне поле можна використовувати тоді коли ми в рамках класах хочемо інкапсулювати логіку створених ним обєктів
        // readonly поле можна реалізувати тільки в конструкторі
    public readonly array:string[]
    constructor(a:string[]){
        this.array=a
        // Object.freeze(a) варіант для того як зробити так щоб readonly не змінювалося
        // Object.freeze() -морозить тільки на першому рівні
    }
}

const car1=new Car(['d','dd','cwcw'])
car1.array.push('scc')
console.log(car1.array);
