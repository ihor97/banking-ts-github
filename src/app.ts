import { interval, take,skip, first } from "rxjs";


interval(1000)
// отримує перше значення і відписується
.pipe(first())
.subscribe(console.log)








