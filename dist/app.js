"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Subject
// він доставляє дані зразу декільком підписникам
const rxjs_1 = require("rxjs");
const hotStream$ = new rxjs_1.Subject();
setTimeout(() => { hotStream$.next(1); }, 1000);
setTimeout(() => { hotStream$.next(2); }, 2000);
setTimeout(() => { hotStream$.next(3); }, 3000);
setTimeout(() => { hotStream$.next(4); }, 4000);
setTimeout(() => {
    hotStream$.subscribe(val => {
        console.log('a ' + val);
    });
}, 0);
setTimeout(() => {
    hotStream$.subscribe(val => {
        console.log('b ' + val);
    });
}, 2500);
//# sourceMappingURL=app.js.map