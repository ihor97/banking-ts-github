"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// комьінування обєднує декілька потоків в один
((0, rxjs_1.interval)(1000)).pipe(
// противополжність до concatMap
(0, rxjs_1.switchMap)(val => (0, rxjs_1.of)(val * 5))).subscribe(val => { console.log(val); });
//# sourceMappingURL=app.js.map