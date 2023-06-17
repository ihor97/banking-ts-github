interface IExamle{
    name?:string
    count?:number
    region?:string
}
// робить усі поля обовязковими
type IExamleRequired=Required<IExamle>
let h:IExamleRequired