// generics -  потрібно для привязки метода до типу якого ми вкажемо

// type A={key1:string,key2:string}
// type B={key2:null,key3:string}
// // так як key2 не є однаковим  буде вибивати помилку і працювати не буде 
// type C=A & B
// let f:C


// ----------------------------------------//

// interface IExample{
//     name:string
//     count:number
//     region:string
// }

// // створюємо літерал з IExampleType
// type IExampleType=keyof IExample
// let C:IExampleType
// C="region"

// -------------------==/
// беремо ключі з різних обєктів
// type A={key1:string,key2:string}
// type B={key2:null,key3:string}
// type getObjDiffKeys<T,U>=Omit<T, keyof U> & Omit<U, keyof T>
// type ab=getObjDiffKeys<A,B>
// let c:ab={key1:'s',key3:'ss'}

// -------------------------------------//

// interface IExample{
//     name:string
//     count:number
//     region:string
// }
// // робить поля не обовязковими
// type IExampleType=Partial<IExample>
// let C:IExampleType

// ---------------------------------------------//

// interface IExample{
//     name:string
//     count:number
//     region:string
// }
// // вибираємо  поля вказані після коми
// type IExampleType=Pick<IExample, 'name'| 'count'>

// -------------------------------------------//
// class Example{
//     foo:string
// }

// class ExampleChild extends Example{
    
// }

// class ExampleOther{

// }
// // якщо тип Т наслідується від Example буде foo | bar тип
// type GenExample<T>=T extends Example ? 'foo' | 'bar':'qwe'
// let h:GenExample<ExampleChild>
// по суті дженеріки як функції
// let b:GenExample<ExampleOther>
// h="bar"
// b="qwe"