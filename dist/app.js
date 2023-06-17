class ExampleA {
}
class ExampleB {
}
// для того щоб створити ексемпляр типу треба такий синтаксис
function userFactory(type) {
    return new type();
}
const example = userFactory(ExampleA);
//# sourceMappingURL=app.js.map