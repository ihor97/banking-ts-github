interface GenericInterface<Z>{
    value:Z
    getIdentity:()=>Z
}

interface IExampleTemp{
    count:number
}
interface IGenerate{
    temp:string
}
// клас IdentityClass є типу Т який наслідує параметри з інтрефейсу IExampleTemp та має бути сконструйований по GenericInterface
// клас з двома шаблонними типами
class IdentityClass<T extends IExampleTemp,R extends IGenerate> implements GenericInterface<T>{
    public value: T
    public e:R
    constructor(value:T,e:R){
        this.value=value
        this.e=e
    }
    public getIdentity () :T{
        return this.value
    }
    public generate(e:R){

    }
}

class ExampleTemp implements IExampleTemp{
    public count: number 
}

const obj:IGenerate={
    temp:'123'
}

const et=new ExampleTemp()
const myNum=new IdentityClass<ExampleTemp,IGenerate>(et,obj)
console.log(myNum);
