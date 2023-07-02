"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// комьінування обєднує декілька потоків в один
const observable = new rxjs_1.Observable(sub => {
    sub.next(1);
    sub.next(4);
    sub.next(6);
    sub.complete();
});
// merge не чекає на complete
(0, rxjs_1.merge)(observable, (0, rxjs_1.timer)(1000), (0, rxjs_1.timer)(2000), (0, rxjs_1.of)(1, 2, 3)).subscribe(val => console.log(val));
//# sourceMappingURL=app.js.map