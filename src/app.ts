
// абстрактні класи

// від нього не можна створити обєкт
// від них можн наслідуватися 
// консолідує в собі базову логіку для дочірних класів
// абстрактний клас задає нам рамки 
// більше для розробників що їм треба дещо реалізувати
enum TypeControl{
    Input=0,
    Select=1
}
// // так у нас нема можливості створити обєкт через Control
// якщо ми помітимо клас як абстрактний тоді ми не будемо запутувати розробників так що вони не зможуть створити від нього інстанс
abstract class Control{
    protected abstract  value:any
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
    // абстрактні методи не мають реалізації
    // якщо в класі є абстрактний метод тоді він має бути абстрактним
    // так як метод абстрактний ми можемо його переоприділити в дочірніх класах
    public abstract getInfo():string
}

class TextBox extends Control{
    protected value: string;
    private _length:number
    constructor(){
        super(TypeControl.Input)
        this._length=1
    }
    public get getLength(): number {
        return this._length
    }
public getInfo(): string {
    return `Control:name =${this.name} длина строки =${this._length}`
}
}
class SelectBox extends Control{
    protected value: number;
    private _items:Array<string>
    constructor(items:Array<string>=[]){
        super(TypeControl.Select)
        this._items=items
    }
    public getInfo(): string {
        // в d попаде first а в с second якщо не ініціалізувати d
        let str=this._items.reduce((d,c)=>d+'; '+c)
        return `Control:name =${this.name} SelectBox variants =${str}`
    }
}

let textbox=new TextBox()
console.log(textbox.getInfo());
let selectBox=new SelectBox(['first','second','third'])
console.log(selectBox.getInfo());
