var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let key = '[variable]';
let template = `_method_${key}_parametrs`;
let metadata = {};
// фабрика декораторів  - вертає декоратор  резолвить якусь нову ф-ю
function decorateParametr() {
    return (target, method, index) => {
        // 
        let metadataKey = template.replace(key, method);
        if (!metadata[metadataKey]) {
            metadata[metadataKey] = [];
        }
        metadata[metadataKey].push(index);
    };
}
function decorateMethod(str) {
    return (target, method, descriptor) => {
        let originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let parametrIndex = template.replace(key, method);
            var indices = metadata[parametrIndex];
            let argsWithValue = '';
            for (var i = 0; i < args.length; i++) {
                if (indices.indexOf(i) !== -1) {
                    var arg = args[i];
                    var argStr = JSON.stringify(arg) || args.toString();
                    argsWithValue += `arg[${i}]:${argStr}`;
                }
            }
            console.log(`
            Декоратор с параметром = '${str}' 
            вызван дял метода '${method}' 
            параметры ${argsWithValue} 
            екземпляр класа '${target.constructor.name}' 
            `);
            return originalMethod.apply(this, args);
        };
    };
}
class Example {
    exec(a, b, c) {
        this._a = a;
    }
}
__decorate([
    decorateMethod('кастомний параметр'),
    __param(0, decorateParametr()),
    __param(1, decorateParametr()),
    __param(2, decorateParametr())
], Example.prototype, "exec", null);
let tom = new Example();
tom.exec('Параметр 1', 'Параметр 2', 'Параметр 3');
tom.exec('Параметр 4', 'Параметр 5', 'Параметр 6');
tom.exec('Параметр 7', 'Параметр 8', 'Параметр 9');
//# sourceMappingURL=app.js.map