// Subject
// він доставляє дані зразу декільком підписникам
import { Subject } from "rxjs";

const hotStream$=new Subject<number>()
setTimeout(() => {hotStream$.next(1)}, 1000);
setTimeout(() => {hotStream$.next(2)}, 2000);
setTimeout(() => {hotStream$.next(3)}, 3000);
setTimeout(() => {hotStream$.next(4)}, 4000);

setTimeout(() => {
    hotStream$.subscribe(val=>{
        console.log('a '+val);
        
    })
}, 0);
setTimeout(() => {
    hotStream$.subscribe(val=>{
        console.log('b '+val);
        
    })
}, 2500);