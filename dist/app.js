var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// переоприділення метода в класі
// для того щоб ми могли не переписувати код 
function decoratorMethod(target, method, descriptor) {
    descriptor.value = function () {
        console.log('новий метод');
    };
    return descriptor;
}
class Test {
    constructor() {
        this.test = 123;
    }
    exec1() {
        console.log('основний метод');
        let h;
        h.start();
    }
}
__decorate([
    decoratorMethod
], Test.prototype, "exec1", null);
let t = new Test();
t.exec1();
//# sourceMappingURL=app.js.map