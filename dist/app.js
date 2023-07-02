"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const warm$ = (0, rxjs_1.interval)(1000)
    // робимо так щоб ми слухали дані з одного потоку
    .pipe((0, rxjs_1.share)());
warm$.subscribe();
setTimeout(() => {
    warm$.subscribe((val) => {
        // тут уже деякі дані будуть пропусатися
        console.log(val);
    });
}, 3000);
//# sourceMappingURL=app.js.map