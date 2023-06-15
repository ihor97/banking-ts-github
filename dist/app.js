// патерн visitor
class ConcreteComponentA {
    accept(visitor) {
        visitor.visitConcreteComponentA(this);
    }
    exclusiveMethodOfConcreteComponentA() {
        return 'A';
    }
}
class ConcreteComponentB {
    accept(visitor) {
        visitor.visitConcreteComponentB(this);
    }
    specialMethodOfConcreteComponentB() {
        return 'B';
    }
}
class ConcreteVisitor1 {
    visitConcreteComponentA(element) {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()}+ConcreteVisitor1`);
    }
    visitConcreteComponentB(element) {
        console.log(`${element.specialMethodOfConcreteComponentB()}+ConcreteVisitor1`);
    }
}
class ConcreteVisitor2 {
    visitConcreteComponentA(element) {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()}+ConcreteVisitor2`);
    }
    visitConcreteComponentB(element) {
        console.log(`${element.specialMethodOfConcreteComponentB()}+ConcreteVisitor2`);
    }
}
function clientCode(components, visitor) {
    for (const comp of components) {
        comp.accept(visitor);
    }
}
const components = [
    new ConcreteComponentA(),
    new ConcreteComponentB()
];
const visitor1 = new ConcreteVisitor1();
clientCode(components, visitor1);
const visitor2 = new ConcreteVisitor2();
clientCode(components, visitor2);
//# sourceMappingURL=app.js.map