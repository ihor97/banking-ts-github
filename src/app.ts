// кастомний простір імен 
// типу як в класі є поля так і в namespace є класи
// дозволяє розграничити області 
// також можуть бути namespace всередині namespace
namespace CustomNameSpace{
    export class Example {
        
    }
export function name(params) {
    
}
    interface IItem{
        title:string
    }
}
class Example {
        
}
// так можна зробити так щоб не писати багато разів CustomNameSpace
import b=CustomNameSpace


let g= new CustomNameSpace.Example()