// реалізація менеджера запущених процесів

class TaskRunner{
    private static _collection:TaskWorker[]=[]
    public static register(task:TaskWorker){
        if(!this._collection.filter(g=>g.taskName===task.taskName).length){
            this._collection.push(task)
        return true

        }
        return false
    }
    public static getAll():Array<TaskWorker>{
        return this._collection
    }
}
// кожен раз коли створюється екземпляр класу відпрацьовує декоратор
// в момент коли створюється задачка ми її реєструємо в класі TaskRunner
function registerTask<TFunction extends Function>(target:TFunction):TFunction {
    let newController:Function=function () {
        console.log('створений новий процес');
        let index=0
        while(true){
            index++
            this.taskName=`задача №${index}` 
            if(TaskRunner.register(this)){
                break
            }
        }
        
    }
    console.log(newController);
    
    // по суті ви вертаємо конструктор який виконується апи ініціадізації класу
    return <TFunction>newController
}
// немає силок між класом TaskWorker та TaskRunner але за допомогою декоратора ми реєструємо нових таскворкерів в середині класу TaskRunner
@registerTask
class TaskWorker{
    public taskName:string=''
    public running:boolean=false
    constructor(){}

    public start():void{
        this.running=true
        console.log(`Запущена ${this.taskName}`);
    }
    public pause(){
        this.running=false
        console.log(`Приоставлена ${this.taskName}`);
        
    }


}
let task1=new TaskWorker()
let task2=new TaskWorker()
let task3=new TaskWorker()
let task4=new TaskWorker()
let task5=new TaskWorker()
console.log(TaskRunner.getAll());
task1.pause()