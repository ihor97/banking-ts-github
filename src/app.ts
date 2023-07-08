// декоратор вхідних параметрів метода
// parameterIndex - номер передаваємого параметра
// function  parameterDecorator(target:Object,propertykey:string,parameterIndex:number) {
    
// }


function decoratorParametr(target:Object,method:string,index:number):void {
    console.log(`method = ${method}`);
    console.log(`index = ${index}`);
}

class Example{
    private _a:string
    public exec(@decoratorParametr a :string,
                @decoratorParametr b:string,c:string){
                    this._a=a
                }
}

let tom=new Example()
tom.exec('param1','param2','param3')//там де parameterIndex виведе 0 та 1