abstract class Control {
    // тут тоже поліморфізм
    protected abstract value:any
    constructor() {
        
    }
    // поліморфізм інша реалізація метода відмінна від базового 
    // різні варіанти чого небудь з одною і тою самою сигнатурою в цьому випвдку метод setValue
    public abstract setValue(val:any):void
}

class TextBox extends Control{
    protected value: string
    constructor(){
        super()
    }

    public setValue(val:string):void{
        this.value=val
    }
}

class CheckBox extends Control{
    protected value: boolean
    constructor(){
        super()
    }
    public setValue(val: boolean): void {
        this.value=val
    }
}
const textBox=new TextBox()
textBox.setValue('wsss')