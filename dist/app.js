"use strict";
// холодні потоки - ті які працюють для тільки свого підписника, вони починають емітити значення тільки тоді коли на них хтось підпишеться
// subscribe - аналогія до then ми можемо получати дані тільки тоді коли підпишемся
// гарячі потоки - розсилають свої значення навіть якщо не був викликаний метод subcribe
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// типу в золодних потоках ми не втратимо значення 
// const coldStream$=new Observable<number>(
//     observer=>{
//         setTimeout(() => {observer.next(1) }, 1000);
//         setTimeout(() => {observer.next(2) }, 2000);
//         setTimeout(() => {observer.next(3) }, 3000);
//         setTimeout(() => {observer.next(4) }, 4000);
//     }
// )
// // підпищик А 
// setTimeout(() => {
//     coldStream$.subscribe(val=>{
//         console.log('a ' + val);
//     })
// }, 0);
// // підпищик Б
// setTimeout(() => {
//     coldStream$.subscribe(val=>{
//         console.log('б ' + val);
//     })
// }, 2500);
// гарячі потоки - другий підпищик вже не отримає деякі значення
const coldStream$ = new rxjs_1.Observable(observer => {
    setTimeout(() => { observer.next(1); }, 1000);
    setTimeout(() => { observer.next(2); }, 2000);
    setTimeout(() => { observer.next(3); }, 3000);
    setTimeout(() => { observer.next(4); }, 4000);
});
// ми підігрили потік
const hotStream$ = coldStream$.pipe((0, rxjs_1.share)());
// підпищик А 
setTimeout(() => {
    hotStream$.subscribe(val => {
        console.log('a ' + val);
    });
}, 0);
// підпищик Б
setTimeout(() => {
    hotStream$.subscribe(val => {
        console.log('б ' + val);
    });
}, 2500);
//# sourceMappingURL=app.js.map