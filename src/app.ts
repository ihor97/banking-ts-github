
interface IControl{
    getinfo:()=>string
}
class Control implements IControl{
    constructor(){

    }
    // у нас є три різні методи getinfo
    public getinfo():string{
        return `Обычная иформация о контроле`
    }
}

class TextBox extends Control{
    constructor(){
        super()
    }
    // поліморфізм
    public getinfo(): string {
        return `Инфа о контроле TextBox`
    }
}
class SelectBox extends Control{
    constructor(){
        super()
    }
}
class CheckBox extends Control{
    constructor(){
        super()
    }
    // поліморфізм
    public getinfo(): string {
        let baseInfo=super.getinfo()
        return `${baseInfo}, а также инфа с CheckBox`
    
    }
}

const textBox=new TextBox()
console.log((<IControl>textBox).getinfo());
const selectBox=new SelectBox()
console.log((<IControl>selectBox).getinfo());
const checkBox=new CheckBox()
console.log((<IControl>checkBox).getinfo());