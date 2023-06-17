// generic класи є для того щоб міняти типи 
// Omit Partial .... вже готові рішення для роботи з типами 

type GetObjDifferentKeys<T,U>=Omit<T,keyof U>&Omit<U,keyof T>
// вертає спільні ключі  обєднання ь=типів T|U тобто створюється спільний тип
type GetObjSameKeys<T,U>=Omit<T|U,keyof GetObjDifferentKeys<T,U>>

interface IExample2{
    name:string
    count:number
    country:string
}
interface IExample1{
    name:string
    count:number
    region:string
}
type IExampleConcat=GetObjSameKeys<IExample2,IExample1>
let h:IExampleConcat={count:1,name:''}