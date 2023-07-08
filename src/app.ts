
function decoratorProperty(target:Object,propKey:string|symbol):any {
let i=0
//  приклад з гет і сет
let descriptor={
    get:function () {
        i++
        return i
    },
    set:function(val:number){
        i=val
    }
}   
    return descriptor
}

class Example {
    // робимо з поля властивість аксесор
    @decoratorProperty
    private _a:number
    constructor() {
        console.log(this._a);
        console.log(this._a);
        console.log(this._a);
        console.log(this._a);
        this._a=10
        console.log(this._a);
        
        
    }
}

let e=new Example()

