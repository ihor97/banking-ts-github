// поліморфізм якийсь обєкт в різних умовах може мати різні властивості при тому маючи один інтерфейс
// може бути один метод і в залежності від того в якому класі ми його викликаємо з одною й тою самою сигнатурою виконує різні ф-ї

// є дві варіації - коли один інтерфейс має багато реалізацій і другий коли один метод в залежності від того 
// з якого класу ми його викликаємо з одною і тою самою сигнатурою на одному дереві наслідування він виконує різні функції

interface IPrintMessage{
    saveMessage(message:string):boolean
    print():void
}
class PrintMessageToConsole implements IPrintMessage{
    private _prefix:string
    private _message:string

    constructor(){
        this._prefix='вывод многострочный'
    }

    public saveMessage(message: string): boolean {
        if(!message){
            return false
        }
        this._message=message
        return true
    }
    public print(): void {
        if(!this._message){
            throw new Error('пусто!')
        }
        let text=`
        ${this._prefix}.
        Сообщение: '${this._message}'`
        console.log(text);
        
    }
}
class PrintMessagToDocument implements IPrintMessage{
    private _message:string
    constructor(){}
    public saveMessage(message: string): boolean {
        if(!message){
            return false    
        }
        this._message='Вывод в дом в одну строку.'
        return true
    }
    public print(): void {
        document.write(this._message)
    }
}

const printMessageToConsole= new PrintMessageToConsole()
if(printMessageToConsole.saveMessage('сообщение для класа printMessageToConsole')){
    printMessageToConsole.print()
}
const printMessageToDocument= new PrintMessagToDocument()
if(printMessageToDocument.saveMessage('сообщение для класа printMessageToDocument')){
    printMessageToDocument.print()
}

// маємо ф-ю яка приймає обєкт типу IExample  в залежності від того який обєкт передамо буде інший вивід
// маємо ф-ю яка буде приймати два типи наших обєктів по типу інтерфейса
function showObj(obj:IPrintMessage){
    obj.print()
}

// showObj(printMessageToDocument)
// showObj(printMessageToConsole)