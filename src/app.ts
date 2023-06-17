// типи рівні за сигнатурою але різні за полями 


// type A={key1:string,key2:string}
// type B={key2:string,key3:string}

// // конкатенація типів
// type result =A&B

// const g={
//     key1:'',
//     key2:'',
//     key3:''
// }

// ----другий варік де key2 number
type A={key1:string,key2:string}
type B={key2:number,key3:string}

// Omit Это новый тип, в котором можно указать свойства, которые будут исключены из исходного типа.
// цей тип видаляє вказані властивості з типу 
// тобто булу видалено спільну властивість key2
type GetObjDifferentKeys<T,U>=Omit<T,keyof U>& Omit<U,keyof T>


// key2 видалено
let obj:GetObjDifferentKeys<A,B>={
    key1:'1',
    key3:'3'
}