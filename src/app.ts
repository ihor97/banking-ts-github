class classBase{
    public property1:number
    protected property2:string
    private _property3:boolean
    constructor(p1:number,p2:string,p3:boolean){
        this.property1=p1
        this.property2=p2
        this._property3=p3
    }
    public getInfo():string{
        return `prop1 ${this.property1} prop2 ${this.property2} prop3 ${this._property3}`
    }
}

class ClassA extends classBase{
    constructor(){
        super(1,'класс А',true)
    }
}
class ClassB extends classBase{
    constructor(){
        super(1,'класс B',false)
    }
}

const A=new ClassA()
const B=new ClassB()
console.log(A.getInfo());
console.log(B.getInfo());