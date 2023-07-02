import { subscribe } from 'diagnostics_channel';
import { Observable, Subject, Subscription, filter, map, of, tap } from 'rxjs';

/*
оператори створення - of fromEvent interval from
перетворення - map scan buffer
фільтрації -filter take skip distinct
обробка помилок -catchError retry 
умови - skipUntil skipWhile takeUntil
утіліти - tap delay
для Connectable Observable - oublish
*/ 

// різниця між of i from  в тому що of приймає окремі дані а from приймає джерело даних (таких як проміси )

// кастомний оператор
/*
Додавання підписки до subList дозволяє зберігати посилання на
 підписку для подальшого керування нею. Ви можете використовувати subList для
 відписки від усіх підписок одночасно або для подальшого керування кожною підпискою окремо
*/  
const subList:Subscription[]=[]

/*
Функція logger повинна повертати Observable, щоб можна було використовувати 
її як pipe-оператор. Ви можете використати конструктор Observable для створення Observable, 
що отримує значення з вихідного Observable source та передає їх до свого власного subscriber.
 Окрім того, ви також мусите повернути subscribtion з функції logger, 
щоб воно можна було додати до списку підписок subList. Ось оновлений код функції logger:
*/ 
const logger=(source:Observable<any>):Observable<any>=>{
    return new Observable(subscriber=>{
        const subscribtion=source.subscribe(
            {
                next(value){
                    console.log(value);
                    subscriber.next(value)
                },
                error(err){
                    console.error(err);
                    subscriber.error(err)
                },
                complete(){
                    console.log('complete');
                    subscriber.complete()
                }
            }
        )
        subList.push(subscribtion)
        subscribtion.unsubscribe()
    })
}

of(1,2,3).pipe(
    logger
).subscribe(
    {
        complete(){
            setTimeout(() => {
                console.log(subList);
                // там є статус isStopped який показує чи ми відписалися
            }, 1000);
        }
    }
)