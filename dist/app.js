"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// гарячому потоку не потрібен підписники щоб видавати значення тому буде пусто
const Sub = new rxjs_1.Subject();
Sub.next(1);
Sub.next(2);
Sub.next(3);
Sub.subscribe(e => { console.log(e); });
//# sourceMappingURL=app.js.map