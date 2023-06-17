// клас IdentityClass є типу Т який наслідує параметри з інтрефейсу IExampleTemp та має бути сконструйований по GenericInterface
// клас з двома шаблонними типами
class IdentityClass {
    constructor(value, e) {
        this.value = value;
        this.e = e;
    }
    getIdentity() {
        return this.value;
    }
    generate(e) {
    }
}
class ExampleTemp {
}
const obj = {
    temp: '123'
};
const et = new ExampleTemp();
const myNum = new IdentityClass(et, obj);
console.log(myNum);
//# sourceMappingURL=app.js.map