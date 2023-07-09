import { Child1,Child2,Child3 } from "./children/index"



enum Priority{
    High=1,
    Low=2
}
let index=0
 class Process{
    public child1:Child1
    public child2:Child2
    public child3:Child3
    public name:string
    public index:number
    public prority:Priority
    constructor(n:string){
        this.name=n
        this.index=index
        this.prority=Priority.Low
    }
}
export {Priority,Process}