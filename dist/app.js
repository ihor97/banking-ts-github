"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
(0, rxjs_1.interval)(1000)
    // отримує перше значення і відписується
    .pipe((0, rxjs_1.first)())
    .subscribe(console.log);
//# sourceMappingURL=app.js.map