// це є тайпінг або заголовочний файл
// тут ми вказуємо що ми хочемо викликати з скріпта і обявляємо глобально
declare var funcJS:(a:string)=>void

class Example {
    private _id:number
    constructor(id:number){
        this._id=id
    }
    public exec():void{
        funcJS('function')
    }
};

let obj=new Example(1);
obj.exec()