
interface IExamle{
    name:string
    count:number
    region:string
}
// робить навпаки як omit тобто після коми вказуємо те що має бути а все решта відкидається
type IExamleRequired=Pick<IExamle,'name'|'count'>