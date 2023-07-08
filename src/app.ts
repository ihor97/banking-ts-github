// переоприділення метода в класі
// для того щоб ми могли не переписувати код 
function decoratorMethod(target:Object,method:string,descriptor:TypedPropertyDescriptor<any>):TypedPropertyDescriptor<any> {
 descriptor.value=function () {
    console.log('новий метод');
    
 }
 return descriptor
}

class Test{
    public test:number=123
    @decoratorMethod
    public exec1(){
        console.log('основний метод');
        let h
        h.start()
        
    }
}
let t =new Test()
t.exec1()