// Liskov Substitution principle
// якщо P являється підтипом Т то ми можемо підставити тип P в замість типу T без всяких негативиних наслідків для програми


namespace incorrect{
    class Rectangle{
        constructor(public width:number,public height:number){

        }
        setWidth(width:number){
            this.width=width
        }
        setHeight(height:number){
            this.height=this.height
        }
        getArea(){
            return this.height*this.width
        }
    }
    class Square extends Rectangle{
        constructor(size:number){
            super(size,size)
        }
        setWidth(width:number){
            this.width=width
            this.height=width
        }
        setHeight(height:number){
            this.height=this.height
            this.height=height
            
        }
        getArea(){
            return this.height*this.width
        }
    }

    const testShapesSize=(rect:Rectangle)=>{
        // для квадрата цей тест зламається так як спочатку ставиться значення 10 а потім 5 
        rect.setHeight(10)
        rect.setWidth(5)
        return rect.getArea()===50 ? 'correct':'failed'
    }
    

}


namespace correct{

interface Shape{
    getArea:()=>number
}
interface WidthfulShape{
    setWidth:(size:number)=>void
}
interface HeightfulShape{
    setHeight:(height:number)=>void
}

type SquareShape=Shape&WidthfulShape
type RectAngleShape=Shape&WidthfulShape&HeightfulShape

class Square implements SquareShape{
 
    constructor(public width:number){}
    setWidth(size){
        this.width=size
    }
    getArea(){
        return this.width**2
    }
}
class Rectangle implements RectAngleShape{
 
    constructor(public width:number,public height:number){}
    setWidth(size){
        this.width=size
    }
    setHeight(height:number){
        this.height=height
    }
    getArea(){
        return this.width**2
    }
}

const testRectSize=(rect:RectAngleShape)=>{
    rect.setHeight(10)
    rect.setWidth(5)
    return rect.getArea()===50 ? 'correct':'failed'

}
const testSquareSize=(square:SquareShape)=>{
    square.setWidth(10)
    return square.getArea()===100 ? 'correct':'failed'

}






}