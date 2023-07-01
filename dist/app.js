"use strict";
// потік це є деякі івенти упорядочені в часі
// в ангуларі потоки це Http запроси, router events, AbstractControl.valueChanges, ActivatedRoute.params, EventEmitter
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// Observable подібний на проміс але працює трохи по іншому
// проміс має два стани - res i rej але не має next так як він закінчується а observable має next  
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res('resolve');
    }, 1000);
});
const observable = new rxjs_1.Observable((subscriber) => {
    setTimeout(() => {
        subscriber.next('hello');
    });
    subscriber.next(1);
    subscriber.next(2);
    subscriber.complete();
    subscriber.error('some error');
});
//# sourceMappingURL=app.js.map