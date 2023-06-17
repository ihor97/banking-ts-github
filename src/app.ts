interface GenericInterface<Z>{
    value:Z
    getIdentity:()=>Z
}
class IdentityClass<T> implements GenericInterface<T>{
    public value: T
    constructor(value:T){
        this.value=value
    }
    public getIdentity () :T{
        return this.value
    }

}

const myNum=new IdentityClass<number>(4)
const myStr=new IdentityClass<string>('ddd')