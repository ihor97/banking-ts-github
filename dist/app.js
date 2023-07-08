// є чотири типи деораторів
// класів 
// методів
// параметрів методів
// полів/ властивостей  класу
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorClass(target) {
    let newConstructor = function () {
        console.log('exec newConstructor');
    };
    return newConstructor;
}
// декоратор ініціалізуєтсья тоді коли ініціалізуєтсья клас
function closeObject(constructor) {
    console.log('obj sealed');
    Object.seal(constructor);
    // 
    Object.seal(constructor.prototype);
}
// можна застосовувати декілька декораторів
function mainThread(constructor) {
    console.log('створений головний потік');
    constructor.prototype.isMainThread = true;
}
// декоратори виконуються знизу вверх
// декоратор виконується тоді коли ініціалізується клас
// ми змінюємо поведінку класу при тому що сам його код не міняли
let TaskWorker = class TaskWorker {
    constructor(taskName) {
        this.taskName = taskName;
    }
    exec() {
        console.log(this.taskName);
    }
};
TaskWorker = __decorate([
    closeObject,
    mainThread
], TaskWorker);
// прототип обєкта не можна розширити
let task = new TaskWorker('eee');
console.log(task);
//# sourceMappingURL=app.js.map