// реалізація менеджера запущених процесів
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class TaskRunner {
    static register(task) {
        if (!this._collection.filter(g => g.taskName === task.taskName).length) {
            this._collection.push(task);
            return true;
        }
        return false;
    }
    static getAll() {
        return this._collection;
    }
}
TaskRunner._collection = [];
// кожен раз коли створюється екземпляр класу відпрацьовує декоратор
// в момент коли створюється задачка ми її реєструємо в класі TaskRunner
function registerTask(target) {
    let newController = function () {
        console.log('створений новий процес');
        let index = 0;
        while (true) {
            index++;
            this.taskName = `задача №${index}`;
            if (TaskRunner.register(this)) {
                break;
            }
        }
    };
    console.log(newController);
    // по суті ви вертаємо конструктор який виконується апи ініціадізації класу
    return newController;
}
// немає силок між класом TaskWorker та TaskRunner але за допомогою декоратора ми реєструємо нових таскворкерів в середині класу TaskRunner
let TaskWorker = class TaskWorker {
    constructor() {
        this.taskName = '';
        this.running = false;
    }
    start() {
        this.running = true;
        console.log(`Запущена ${this.taskName}`);
    }
    pause() {
        this.running = false;
        console.log(`Приоставлена ${this.taskName}`);
    }
};
TaskWorker = __decorate([
    registerTask
], TaskWorker);
let task1 = new TaskWorker();
let task2 = new TaskWorker();
let task3 = new TaskWorker();
let task4 = new TaskWorker();
let task5 = new TaskWorker();
console.log(TaskRunner.getAll());
task1.pause();
//# sourceMappingURL=app.js.map