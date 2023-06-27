class ConcreteComponent {
    operation() {
        return 'ConcreteComponent';
    }
}
class Decorator {
    constructor(component) {
        this.component = component;
    }
    operation() {
        return this.component.operation();
    }
}
class ConcreteDecoratorA extends Decorator {
    operation() {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}
class ConcreteDecoratorB extends Decorator {
    operation() {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}
function clientCode(comp) {
    console.log(`Result:${comp.operation()}`);
}
const simple = new ConcreteComponent();
clientCode(simple);
// тут ми закидуючи аргументом в цей клас викликаємо 
const decor1 = new ConcreteDecoratorA(simple);
clientCode(decor1);
// можна обгортати декоратори 
const decorator2 = new ConcreteDecoratorB(decor1);
clientCode(decorator2);
//# sourceMappingURL=app.js.map