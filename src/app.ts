import { interval, take } from "rxjs";


interval(1000)
// автоматична відписка при отриманні двох значень 
.pipe(take(2))
.subscribe(console.log)








