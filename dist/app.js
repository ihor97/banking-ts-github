"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const observable = new rxjs_1.Observable(sub => {
    sub.next(1);
    sub.error('error');
});
observable.pipe(
// ще одна фіча як можна юзати tap 
(0, rxjs_1.tap)(val => console.log(val), err => console.log(err), () => console.log('complete'))).subscribe({ error(err) {
        console.log(err);
    } });
//# sourceMappingURL=app.js.map