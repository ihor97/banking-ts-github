import { interval, take,skip, forkJoin, takeUntil, of, Observable, catchError, concat, timer, merge, map, concatMap } from "rxjs";
// комьінування обєднує декілька потоків в один
(interval(1000)).pipe(
    // подібний до concat буде чекати поки закомплітиться значення і не буде брати нових
    concatMap(val=>of(val*5))
).subscribe(
    val=>{console.log(val)}
    
)