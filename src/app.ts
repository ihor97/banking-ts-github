
interface IAnimalEntity{
    name:string
    age:number
}

let json='{"name":"animal","age":0}'
// обєкт з типом  Readonly робить так що в поля обєкта не можна щось записати
let animal:Readonly<IAnimalEntity>=JSON.parse(json)
// іммутабільність -незмінність