// є чотири типи деораторів
// класів 
// методів
// параметрів методів
// полів/ властивостей  класу

function  decoratorClass<TFunction extends Function>(target:TFunction ):TFunction {
    let newConstructor:Function=function(){
        console.log('exec newConstructor');
    }
    return <TFunction>newConstructor
}

// декоратор ініціалізуєтсья тоді коли ініціалізуєтсья клас



function closeObject(constructor:Function) {
    console.log('obj sealed');
    Object.seal(constructor)
    // 
    Object.seal(constructor.prototype)
}

// можна застосовувати декілька декораторів
function mainThread(constructor:Function) {
    console.log('створений головний потік');
    constructor.prototype.isMainThread=true
    
}

// декоратори виконуються знизу вверх
// декоратор виконується тоді коли ініціалізується клас
// ми змінюємо поведінку класу при тому що сам його код не міняли
@closeObject
@mainThread
class TaskWorker{
    public taskName:string
    constructor(taskName:string){
        this.taskName=taskName
    }
    public exec():void{
        console.log(this.taskName);
        
    }
}

// прототип обєкта не можна розширити
let task=new TaskWorker('eee')
console.log(task);
