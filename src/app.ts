import { subscribe } from 'diagnostics_channel';
import { Observable, Subject, filter, map, of, tap } from 'rxjs';
// тут уже буде
const Sub=new Subject()
Sub.subscribe(e=>{console.log(e);})
Sub.next(1)
Sub.next(2)
Sub.next(3)