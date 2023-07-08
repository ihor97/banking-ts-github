// dependency injection дозволяє розграничити функціонал аплікухи
import 'reflect-metadata';


abstract class PrintService {
        abstract writeMessage(message:string):void
}
class PrintDocumentService extends PrintService{
    public writeMessage(message: string): void {
        document.write(message)
    }
}
class PrintConsoleService extends PrintService{
    public writeMessage(message: string): void {
        console.log(message);
    }
}
class PrintLocaleStorageService extends PrintService{
    public writeMessage(message: string): void {
        localStorage.setItem('message',message)
    }
}

class ServiceLocator {
    private static _sevices:[{interfaceType:Function,instance:Object}]=[] as any
    // interfaceType тип реєструючої залежності
    // instance екземпляр класа який їй відповідає

    public static registerService(interfaceType:Function,instance:Object){
        let record=this._sevices.find(x=>x.interfaceType===interfaceType)
        if(!record){
            record={interfaceType:interfaceType,instance:instance}
            this._sevices.push(record)
        }
        else{
            record.instance=instance
        }
       
    }
    public static getService(interfaceType:Function):Object{
        // When you use this approach, you basically tell TypeScript that this value will never be null or undefined. використовуємо !
    //  тут помилка!!!!!!!!!!!!
        return this._sevices.find(x=>x.interfaceType==interfaceType).instance 
    }
}

ServiceLocator.registerService(PrintService,new PrintDocumentService())
// ServiceLocator.registerService(PrintService,new PrintConsoleService())
// ServiceLocator.registerService(PrintService,new PrintLocaleStorageService())

function inject(target:Object,propKey:string):any {
        let propType=Reflect.getMetadata("design:type",target,propKey)
        let printService=ServiceLocator.getService(propType)
        // треба скачати reflect-metadata
        // рефлексія -зміна структури обєкта в ході виконання програми
    var descriptor={
        get :function(){
          return  printService
        }
    }
    return descriptor
}
class Example {
    // осеовна ціль внедріння залежності в тому що ми не використовуємо конструктор і вказуємо фреймворку що покласти в даний обєкт який саме екземпляр реалізації абстрактного класу туди покласти
    @inject
    private _printService:PrintService

    constructor(){}

    public print(message:string){
        this._printService.writeMessage(message)
    }

}

let e =new Example()
e.print('first message')