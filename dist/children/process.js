"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// абсолютний шлях це шлях від диску
// так як app1- модуль ми не вказуємо розширення
const app1_1 = require("../app1");
class BackgroundWorker {
    constructor() {
        this.processes = [];
    }
    create(n) {
        let newProcess = new app1_1.Process(n);
        this.processes.push(newProcess);
        return newProcess;
    }
}
let bgw = new BackgroundWorker();
bgw.create('new process');
