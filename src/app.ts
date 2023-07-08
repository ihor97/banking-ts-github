// заборона на зміну властивості
function decoratorMethod(target:Object,propKey:string,descriptor:TypedPropertyDescriptor<any>) {
   descriptor.writable=false
}
class Test{
    public test:number=123

    @decoratorMethod
    public exec1 (){
        console.log('normal work of func');
        
    }
    public exec2(){

    }
}

let t =new Test()
t.exec1()

// не спрацює
t.exec1=()=>{console.log(1);
}
t.exec1()
