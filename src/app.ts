
//// літерал строка по суті enum  
// // може бути тільки два значення 'Linux'|'Windows'
type OperationsSystem='Linux'|'Windows'
let os:OperationsSystem='Linux'


// ---------------------------------------------//

interface IExamle{
    name:string
    count:number
    region:string
}

// тут keyof працює як літерал віе верне всі назви полів інтерфейсу IExamle
type IExamleType=keyof IExamle //"count" | 'name' | 'region' вийде такий результат

let g:IExamleType="count"

// -------------------------------------------------//

//keyof вертає ключі також з нетипізованого обєкта
const bmw={name:'BMW',power:'1003hp'}
// можна получити поля обєкта 
type CarLiteralType=keyof typeof bmw
let h:CarLiteralType="name"

// -------------------------------------------------------//
// // дістаємо ключі енума
enum ColorsEnum{
    white='#ffffff',
    black='#000000'
}
type CarLiteralType2=keyof typeof ColorsEnum
let h1:CarLiteralType2="black"
