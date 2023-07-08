var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorName(additional) {
    return (Constructor) => {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                this.kek = 'dwdwedw';
                console.log(additional);
            }
        };
    };
}
let P = class P {
    constructor() {
        this.kek = 'ssss';
    }
};
P = __decorate([
    decoratorName('f')
], P);
const p = new P();
console.log(p);
//# sourceMappingURL=app.js.map