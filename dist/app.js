"use strict";
// fromEvent є одним із функціональних операторів в бібліотеці RxJS. 
// Цей оператор використовується для створення Observable, який слідкує за подіями, 
// що виникають на елементі DOM або іншому подіємному джерелі.
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
(0, rxjs_1.fromEvent)(document, 'mousemove').pipe().subscribe(v => {
    console.log(v);
});
//# sourceMappingURL=app.js.map