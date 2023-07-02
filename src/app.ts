import { interval, take,skip, tap, takeUntil, of, Observable, catchError } from "rxjs";

const observable=new Observable(sub=>{
    sub.next(1)
    sub.error('error')
})

observable.pipe(
    // ще одна фіча як можна юзати tap 
    tap(
        val=>console.log(val),
        err=>console.log(err),
        ()=>console.log('complete')
        
    )
).subscribe({error(err){console.log(err);
}});
