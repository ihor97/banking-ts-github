"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// тут уже буде
const Sub = new rxjs_1.Subject();
Sub.subscribe(e => { console.log(e); });
Sub.next(1);
Sub.next(2);
Sub.next(3);
//# sourceMappingURL=app.js.map