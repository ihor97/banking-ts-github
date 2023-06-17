class ExampleA{
    public prop1:number
}
class ExampleB{
    public prop1:number
}

// для того щоб створити ексемпляр типу треба такий синтаксис
function userFactory<T>(type:new ()=>T):T {
    return new type()
}

const example=userFactory(ExampleA)