"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const observable = new rxjs_1.Observable(sub => {
    sub.next(1);
    sub.error('error');
});
observable.pipe(
// catchError дозволяє нам обробити помилку і продовжити виконання потоку
(0, rxjs_1.catchError)(err => {
    console.log(err);
    return (0, rxjs_1.of)(1, 2, 3);
})).subscribe(console.log);
//# sourceMappingURL=app.js.map