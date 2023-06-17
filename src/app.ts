// типи зіставлення 
// Omit

interface IExamle{
    name:string
    count:number
    region:string
}
// Omit вказує що треба вичеркнути
type ExampleOmitType=Omit<IExamle,'name'>
let h:ExampleOmitType
h={count:1,region:''}