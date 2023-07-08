// декоратор метода
// propKey - назва методу в класі
function decoratorMethod(target, propKey, descriptor) {
    // обєкт в якому будемо міняти метод 
    console.log(target);
    // назва метода в класі
    console.log(propKey);
    // інформація про поле
    console.log(descriptor);
    return descriptor;
}
// декоратор класу
function decoratorClass(target) {
    let newConstructor = function () {
        console.log('exec newConstructor');
    };
    return newConstructor;
}
//# sourceMappingURL=app.js.map