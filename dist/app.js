var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorProperty(target, propKey) {
    let descriptor = {
        writable: false,
        value: 'значення встановлене в декораторі'
    };
    return descriptor;
}
class Example {
    constructor() {
        // this.a='переіначене значення'
    }
}
__decorate([
    decoratorProperty
], Example.prototype, "a", void 0);
// будемо отримувати одне і те саме поле
let e = new Example();
console.log(e.a);
let e1 = new Example();
console.log(e1.a);
let e2 = new Example();
console.log(e2.a);
//# sourceMappingURL=app.js.map