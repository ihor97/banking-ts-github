import { interval, take, skip, forkJoin, takeUntil, of, Observable, catchError, concat, timer, merge, map, concatMap, switchMap, share, publish } from "rxjs";

// аналог  share
const warm$ =publish() (interval(1000));
// якщо ми юзаємо publish треба запустити потік
warm$.connect()
warm$.subscribe(console.log)
setTimeout(() => {
    warm$.subscribe(
        (val) => {
            // тут уже деякі дані будуть пропусатися
            console.log(val);
        }
    )
}, 3000);