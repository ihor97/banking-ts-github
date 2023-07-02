"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// нічого не виведе тому що потік комплітиться
const obs = new rxjs_1.Observable(subscriber => {
    setTimeout(() => {
        subscriber.next(2);
    }, 2000);
    subscriber.complete();
});
obs.subscribe(console.log);
//# sourceMappingURL=app.js.map