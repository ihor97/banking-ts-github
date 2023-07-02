import { interval, take,skip, tap, takeUntil, of, Observable, catchError, concat, timer } from "rxjs";
// комьінування обєднує декілька потоків в один
const observable=new Observable(sub=>{
    sub.next(1)
    sub.next(4)
    sub.next(6)
    sub.complete()
    
})
// конкат склуює декілька потоків в одни
// щоб concat перейшов до наступного потоку треба щоб попередній закомплітився
concat(
    observable,
    timer(1000),
    timer(2000),
    of(1,2,3)
).subscribe(val=>console.log(val))