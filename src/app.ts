import { interval, take, skip, forkJoin, takeUntil, of, Observable, catchError, concat, timer, merge, map, concatMap, switchMap, share } from "rxjs";


const warm$ = interval(1000)
// робимо так щоб ми слухали дані з одного потоку
    .pipe(share())
warm$.subscribe()
setTimeout(() => {
    warm$.subscribe(
        (val) => {
            // тут уже деякі дані будуть пропусатися
            console.log(val);
        }
    )
}, 3000);