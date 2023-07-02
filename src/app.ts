import { map, of, tap } from 'rxjs';

// так як нема підписки нічого не виведеться
of('world').pipe(
    map(name => {
        `Hello ${name}`
    }),
    tap(console.log)
)
// тут уже норм
of('world')
    .pipe(map(name => `Hello1 ${name}` ))
    .subscribe(console.log)
