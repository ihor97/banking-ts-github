// BehaviorSubject

import { BehaviorSubject } from "rxjs";
// він получає в себе начальне значення яке ми можемо отримати навіть без підписки на нього 
// з допомогою getvalue()
const bSubject=new BehaviorSubject<number>(2)
console.log(bSubject.getValue());


bSubject.next(3)
console.log(bSubject.getValue());
