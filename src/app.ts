import { subscribe } from 'diagnostics_channel';
import { Observable, Subject, filter, map, of, tap } from 'rxjs';
// гарячому потоку не потрібен підписники щоб видавати значення тому буде пусто
const Sub=new Subject()
Sub.next(1)
Sub.next(2)
Sub.next(3)
Sub.subscribe(e=>{console.log(e);})