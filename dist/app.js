"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// тіло Observable це є ф-я яка виконається тоді коли хтось підпишеться на цей Observable
// буде 4
const obs = new rxjs_1.Observable(observer => {
    setTimeout(() => {
        observer.error(4);
    });
    observer.next(1);
    observer.next(2);
});
// 1 2 1 2 error 4
obs.subscribe(e => console.log(e), err => {
    obs.subscribe(num => console.log(num));
});
//# sourceMappingURL=app.js.map