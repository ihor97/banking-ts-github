// обявляємо модуль глобально
declare module "process"{
enum Priority{
    High=1,
    Low=2
}
let index=0
 class Process{
    public name:string
    public index:number
    public prority:Priority
    constructor(n:string){
        this.name=n
        this.index=index
        this.prority=Priority.Low
    }
}
}

// export {Priority,Process}