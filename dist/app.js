"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// аналог  share
const warm$ = (0, rxjs_1.publish)()((0, rxjs_1.interval)(1000));
// якщо ми юзаємо publish треба запустити потік
warm$.connect();
warm$.subscribe(console.log);
setTimeout(() => {
    warm$.subscribe((val) => {
        // тут уже деякі дані будуть пропусатися
        console.log(val);
    });
}, 3000);
//# sourceMappingURL=app.js.map