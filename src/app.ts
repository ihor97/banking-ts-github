enum TypeControl{
    Input=0,
    Select=1
}

class Control{
    private _type:TypeControl

    public get name():string{
        let result=''
        switch(this._type){
            case TypeControl.Input:
                result='Ввод текста'
                break;
            case TypeControl.Select:
                result='выбор значения с списка'
                break;
        }
        return result
    }

    constructor(tc:TypeControl){
        this._type=tc
    }
    public getInfo():string{
        // name - це геттер
        return `Назначение: ${this.name}`
    }
}

class TextBox extends Control{
    private _length:number
    constructor(){
        // через super викликається базовий конструктор
        super(TypeControl.Input)
        this._length=1
    }
    // викликаємо метод з батьківського класу і допилюємо йому вивід _length
    // тут деякий варіант поліморфізму тому що переоприділяємо поведінку батьківського методу
    public getInfo(): string {
        return super.getInfo()+' '+this._length
    }
}
class SelectBox extends Control{
    constructor(){
        super(TypeControl.Select)
    }
}

let textbox=new TextBox()
console.log(textbox.getInfo());
let selectBox=new SelectBox()
console.log(selectBox.getInfo());
