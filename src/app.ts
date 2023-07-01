// потік це є деякі івенти упорядочені в часі
// в ангуларі потоки це Http запроси, router events, AbstractControl.valueChanges, ActivatedRoute.params, EventEmitter

import { Observable, Subscriber } from "rxjs";


// Observable подібний на проміс але працює трохи по іншому
// проміс має два стани - res i rej але не має next так як він закінчується а observable має next  
const promise=new Promise((res,rej)=>{
    setTimeout(() => {
        res('resolve')
    }, 1000);
})

const observable:Observable<any>=new Observable(
    (subscriber:Subscriber<any>):void=>{
        setTimeout(() => {
            
            subscriber.next('hello')
        });
        subscriber.next(1)
        subscriber.next(2)
        subscriber.complete()
        subscriber.error('some error')
    }
)
