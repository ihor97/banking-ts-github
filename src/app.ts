import { Observable } from "rxjs";

const stream$=new Observable<number>(observer=>{
    observer.next(0)
    setTimeout(() => {observer.next(1)}, 1000);
    setTimeout(() => {observer.next(2)}, 2000);
    setTimeout(() => {observer.next(3)}, 3000);
    // після complete або error значення вже не емітяться
    setTimeout(() => {observer.complete()}, 4000);
})

stream$.subscribe(val=>{console.log(val);
})