import { subscribe } from 'diagnostics_channel';
import { Observable, map, of, tap } from 'rxjs';

// нічого не виведе тому що потік комплітиться
const obs=new Observable(subscriber=>{
    setTimeout(() => {
        subscriber.next(2)
    }, 2000);

    subscriber.complete()
})
obs.subscribe(console.log
)