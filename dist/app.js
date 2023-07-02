"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
(0, rxjs_1.interval)(1000)
    // автоматична відписка при отриманні двох значень 
    .pipe((0, rxjs_1.take)(2))
    .subscribe(console.log);
//# sourceMappingURL=app.js.map