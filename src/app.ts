interface IExamle{
    name:string
    count:number
    region:string
}
// робить всі наші поля не обовязковими тобто зі знаком ?
type IExamlePartial=Partial<IExamle>
let h:IExamlePartial
