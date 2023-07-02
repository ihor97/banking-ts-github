import { subscribe } from 'diagnostics_channel';
import { Observable, filter, map, of, tap } from 'rxjs';

// тіло Observable це є ф-я яка виконається тоді коли хтось підпишеться на цей Observable
// буде 4
const obs = new Observable(observer => {
    setTimeout(() => {
        observer.error(4)
    });
    observer.next(1)
    observer.next(2)
})
// 1 2 1 2 error 4
obs.subscribe(
    e => console.log(e),
    err => {
        obs.subscribe(
            num => console.log(num)
        )
    }

)