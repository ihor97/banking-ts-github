// фабрика декораторів

function decoratorMethod(param:string) {
    return (target:Object,method:string,descriptor:TypedPropertyDescriptor<any>)=>{
        console.log(`декоратор з ${param} викликаний для метода ${method} екземпляра класа ${target.constructor.name}`);
        
    }
}

class Test{
    public test:number=123
    @decoratorMethod('кастомний параметр')
    public exec1(){
        console.log('основний метод');
        
    }
}
let t =new Test()
t.exec1()