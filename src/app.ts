// fromEvent є одним із функціональних операторів в бібліотеці RxJS. 
// Цей оператор використовується для створення Observable, який слідкує за подіями, 
// що виникають на елементі DOM або іншому подіємному джерелі.


import { BehaviorSubject, fromEvent } from "rxjs";
fromEvent(document,'mousemove').pipe(

).subscribe(
    v=>{
        console.log(v);
        
    }
)