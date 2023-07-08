var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// обгортаємо метод так щоб він виводив стрічку
// можемо переоприділити параметри ті що вертає метод 
function replace(target, method, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let returnValue = originalMethod.apply(this, args);
        return `${JSON.stringify(args)}=>${returnValue}`;
    };
}
class Calculator {
    constructor(n) {
        this._prop1 = n;
    }
    add(x, y) {
        return this._prop1 + x + y;
    }
}
__decorate([
    replace
], Calculator.prototype, "add", null);
let calc = new Calculator(123);
let z = calc.add(1, 2);
console.log(z);
//# sourceMappingURL=app.js.map