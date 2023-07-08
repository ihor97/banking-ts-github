function decoratorProperty(target:Object,propKey:string|symbol):any {
    let descriptor:PropertyDescriptor={
        writable:false,
        value:'значення встановлене в декораторі'
    }    
    return descriptor
}

class Example{
    // таким чином ми зробили статичне readonly поле
    @decoratorProperty
    public a:string
    constructor(){
        // this.a='переіначене значення'
        
    }
}
// будемо отримувати одне і те саме поле
let e =new Example()
console.log(e.a);

let e1 =new Example()
console.log(e1.a);

let e2 =new Example()
console.log(e2.a);
