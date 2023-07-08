// безпечний виклик метода 
// для того щоб могли без помилок викликати метод
function decoratorMethod(target:Object,propKey:string,descriptor:TypedPropertyDescriptor<any>) {
    let origin=descriptor.value
    descriptor.value=function() {
        try{
            origin.apply(this,arguments)
        }catch(ex){
            console.log(ex);
            
        }
    }
}

class Test{
    public test:number=123
    @decoratorMethod
    public exec1(){
        // тут ми моделуюємо помилку
        let h 
        h.start()
    }
}

let t =new Test()
t.exec1()
