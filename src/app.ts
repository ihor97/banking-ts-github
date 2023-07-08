// декоратор потрібен для того щоб задекорувати роботу оригінального класу
interface Component{
    operation():string
}

class ConcreteComponent implements Component{
    public operation(): string {
        return 'ConcreteComponent'
    }
}

class Decorator implements Component{
    protected component:Component
    constructor(component: Component){
        this.component=component
    }
    public operation(): string {
        return this.component.operation()
    }
}

class ConcreteDecoratorA extends Decorator{
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`
    }
}
class ConcreteDecoratorB extends Decorator{
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`
    }
}

function clientCode(comp:Component) {
    console.log(`Result:${comp.operation()}`);
    
}

const simple=new ConcreteComponent()
console.log(simple);

clientCode(simple)

// тут ми закидуючи аргументом в цей клас викликаємо 
const decor1=new ConcreteDecoratorA(simple)
clientCode(decor1)
console.log(decor1);

// можна обгортати декоратори 
const decorator2=new ConcreteDecoratorB(decor1)

clientCode(decorator2)
