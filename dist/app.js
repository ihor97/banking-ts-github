"use strict";
// BehaviorSubject
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// він получає в себе начальне значення яке ми можемо отримати навіть без підписки на нього 
// з допомогою getvalue()
const bSubject = new rxjs_1.BehaviorSubject(2);
console.log(bSubject.getValue());
bSubject.next(3);
console.log(bSubject.getValue());
//# sourceMappingURL=app.js.map