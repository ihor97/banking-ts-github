// робимо конкатенацію різниці і спільного

type GetObjDifferentKeys<T,U>=Omit<T,keyof U>&Omit<U,keyof T>
type GetObjSameKeys<T,U>=Omit<T|U,keyof GetObjDifferentKeys<T,U>>

type MergeTwoObjects<T,U>=
Partial<GetObjDifferentKeys<T,U>>
& {[K in keyof GetObjSameKeys<T,U>]:DeepMergeTwoTypes<T[K],U[K]>}

// воно працює для вложених обєктів
// [T,U] кортеж перевіряється чи вони унаслідуються від однакових типів
// {[key:string]:unknown} означає що це обєкт
// тут використовуємо рекурсію
export type DeepMergeTwoTypes<T,U>=
[T,U] extends [{[key:string]:unknown},{[key:string]:unknown}]
? MergeTwoObjects<T,U>
: T|U


interface IExample2{
    name:string
    count:number
    country:string
}
interface IExample1{
    name:string
    count:number
    region:{
        g:number,
        r:string
    }
}
type IExampleConcat=MergeTwoObjects<IExample2,IExample1>;
// тут country i region необовязкові поля
let h:IExampleConcat={count:1,name:'',region:{g:1,r:''}}
// в h country і region будуть необовязковими полями