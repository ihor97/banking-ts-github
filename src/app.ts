class Model<T>{
    constructor(private entity:T){

    }
    public getValueKey<U extends keyof T>(key : U):T[U]{
        return this.entity[key]
    }

    public update(partial: Partial<T>):void{
        Object.assign(this.entity as {},partial)
    }
}
interface IAnimalEntity{
    name:string
    age:number
}

let json='{"name":"animal","age":0}'
let entity=JSON.parse(json)
let animalModel:Model<IAnimalEntity>=new Model(entity)
console.log(animalModel);

console.log(animalModel.getValueKey('name'));

let newjson='{"name":"newanimal"}'
let newentity=JSON.parse(newjson)
animalModel.update(newentity)
console.log(animalModel.getValueKey('name'));
console.log(animalModel);

