import { interval, take,skip } from "rxjs";


interval(1000)
// скпіаємо перших два значення
.pipe(skip(2))
.subscribe(console.log)








