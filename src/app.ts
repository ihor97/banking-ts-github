// обгортаємо метод так щоб він виводив стрічку
// можемо переоприділити параметри ті що вертає метод 
function replace(target:Object,method:string,descriptor:TypedPropertyDescriptor<any>) {
    let originalMethod=descriptor.value
    descriptor.value=function (...args) {
        let returnValue=originalMethod.apply(this,args)
        return `${JSON.stringify(args)}=>${returnValue}`
 }
}

class Calculator{
    private _prop1:number
    constructor(n:number){
        this._prop1=n
    }

    @replace
    public add(x:number,y:number):number{
        return this._prop1+x+y
    }
}

let calc=new Calculator(123)
let z=calc.add(1,2)
console.log(z);
