import { interval, take,skip, tap, takeUntil, of, Observable, catchError, concat, timer, merge } from "rxjs";
// комьінування обєднує декілька потоків в один
const observable=new Observable(sub=>{
    sub.next(1)
    sub.next(4)
    sub.next(6)
    sub.complete()
    
})
// merge не чекає на complete
merge(
    observable,
    timer(1000),
    timer(2000),
    of(1,2,3)
).subscribe(val=>console.log(val))