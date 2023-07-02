import { interval, take,skip, forkJoin, takeUntil, of, Observable, catchError, concat, timer, merge, map, concatMap, switchMap } from "rxjs";
// комьінування обєднує декілька потоків в один
(interval(1000)).pipe(
    // противополжність до concatMap
    switchMap(val=>of(val*5))
).subscribe(
    val=>{console.log(val)}
    
)