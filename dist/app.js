"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// так як нема підписки нічого не виведеться
(0, rxjs_1.of)('world').pipe((0, rxjs_1.map)(name => {
    `Hello ${name}`;
}), (0, rxjs_1.tap)(console.log));
// тут уже норм
(0, rxjs_1.of)('world')
    .pipe((0, rxjs_1.map)(name => `Hello1 ${name}`))
    .subscribe(console.log);
//# sourceMappingURL=app.js.map