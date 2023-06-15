// приведення  типів інстансів класів можна робити через instaceof 
// instanceof для інтерфейсів не працює так як в js немає інтерфейсів
class Example {
    convert() {
        return `name ${this.name} count=${this.count}`;
    }
}
class ExampleA extends Example {
    constructor(a) {
        super();
        this.testA = a;
    }
}
class ExampleB extends Example {
    constructor(b) {
        // в конструкторі потомків завжди має викоикатися super()
        super();
        this.testB = b;
    }
}
const exampleA2 = new ExampleA('a2');
const exampleA1 = new ExampleA('a1');
const exampleA3 = new ExampleA('a3');
const exampleB1 = new ExampleB('b1');
const exampleB2 = new ExampleB('b2');
const exampleB3 = new ExampleB('b3');
// так як всі вони наслідуються від Example то в масиві будуть значення ExampleA і ExampleB
const collection = [];
// можна багато параметрів передавати в push
collection.push(exampleA2, exampleA1, exampleA3, exampleB1, exampleB2, exampleB3);
// f:Function передаємо батьківський клас
function filter(f) {
    for (let i = 0; i < collection.length; i++) {
        const item = collection[i];
        if (item instanceof f) {
            console.log(`item==typeof ${f.prototype.constructor.name}`, item);
        }
    }
}
// таким чином можна переобразувати типи (має значення якщо типи мають якийсь звязок)
filter(ExampleA);
// filter(ExampleB)
//# sourceMappingURL=app.js.map