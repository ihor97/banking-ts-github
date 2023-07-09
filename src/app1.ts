// так вже ми мусимо імпортити
// так робиться аліас
import * as app2 from "./app"
class Process2{
    public priority:app2.Priority
    constructor(){
        this.priority=app2.Priority.Low
    }
}