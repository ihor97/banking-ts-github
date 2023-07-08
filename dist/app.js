var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorProperty(target, propKey) {
    let i = 0;
    //  приклад з гет і сет
    let descriptor = {
        get: function () {
            i++;
            return i;
        },
        set: function (val) {
            i = val;
        }
    };
    return descriptor;
}
class Example {
    constructor() {
        console.log(this._a);
        console.log(this._a);
        console.log(this._a);
        console.log(this._a);
        this._a = 10;
        console.log(this._a);
    }
}
__decorate([
    decoratorProperty
], Example.prototype, "_a", void 0);
let e = new Example();
//# sourceMappingURL=app.js.map