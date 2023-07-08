// декоратор вхідних параметрів метода
// parameterIndex - номер передаваємого параметра
// function  parameterDecorator(target:Object,propertykey:string,parameterIndex:number) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// }
function decoratorParametr(target, method, index) {
    console.log(`method = ${method}`);
    console.log(`index = ${index}`);
}
class Example {
    exec(a, b, c) {
        this._a = a;
    }
}
__decorate([
    __param(0, decoratorParametr),
    __param(1, decoratorParametr)
], Example.prototype, "exec", null);
let tom = new Example();
tom.exec('param1', 'param2', 'param3'); //там де parameterIndex виведе 0 та 1
//# sourceMappingURL=app.js.map