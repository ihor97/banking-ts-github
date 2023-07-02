import { interval, take,skip, first, takeUntil, of, Observable, catchError } from "rxjs";

const observable=new Observable(sub=>{
    sub.next(1)
    sub.error('error')
})

observable.pipe(
    // catchError дозволяє нам обробити помилку і продовжити виконання потоку
    catchError(err=>{
        console.log(err);
        return of(1,2,3)
    })
).subscribe(console.log
)