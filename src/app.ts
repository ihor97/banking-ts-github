abstract class Control{
    // тут буде поліморфізм і ми в дочірніх класах ставимо вже типи
    protected abstract value:any
    constructor(){}
    // тут буде поліморфізм і ми в дочірніх класах ставимо вже типи
    public abstract setValue(val:any):void


}
// текстбокси працюють тільки з string
class TextBox extends Control{
    protected value: string
    constructor(){
        super()
    }
    public setValue(val: string): void {
        this.value=val
    }
}
// чекбокси працюють тільки з boolean
class CheckBox extends Control{
    protected value: boolean
    constructor(){
        super()
    }
    public setValue(val: boolean): void {
        this.value=val
    }
}

let textBox=new TextBox()
textBox.setValue('string')
let checkBox=new CheckBox()
checkBox.setValue(true)
