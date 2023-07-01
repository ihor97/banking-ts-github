"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const stream$ = new rxjs_1.Observable(observer => {
    observer.next(0);
    setTimeout(() => { observer.next(1); }, 1000);
    setTimeout(() => { observer.next(2); }, 2000);
    setTimeout(() => { observer.next(3); }, 3000);
    // після complete або error значення вже не емітяться
    setTimeout(() => { observer.complete(); }, 4000);
});
stream$.subscribe(val => {
    console.log(val);
});
//# sourceMappingURL=app.js.map