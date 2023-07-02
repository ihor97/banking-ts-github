"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const event$ = new rxjs_1.Subject();
(0, rxjs_1.interval)(1000)
    // takeUntil треба для того зоб відписуватися по умові (як дестрой компоненти)
    // він приймає в себе якийсб іміт (як правило Subject) як тільки Subject видасть значення підписка знищиться
    .pipe((0, rxjs_1.takeUntil)(event$))
    .subscribe(console.log);
setTimeout(() => {
    event$.next(1);
}, 2000);
//# sourceMappingURL=app.js.map