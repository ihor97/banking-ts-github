import { interval, take,skip, first, takeUntil, Subject } from "rxjs";

 const event$=new Subject()
interval(1000)
// takeUntil треба для того зоб відписуватися по умові (як дестрой компоненти)
// він приймає в себе якийсб іміт (як правило Subject) як тільки Subject видасть значення підписка знищиться
.pipe(takeUntil(event$))
.subscribe(console.log)


setTimeout(() => {
    event$.next(1)
}, 2000);






