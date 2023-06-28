// Open closed principle
// класи відкриті для розширення але закриті для модифікацій

enum Shape {
    square='SQUARE',
    circle="CIRCLE"
}
namespace incorrect{
    class Square{
        private _sideSize:number
        private _type=Shape.square
        constructor(sideSize){
            this._sideSize=sideSize
        }
        public get sideSize():number{
            return this._sideSize
        }
        public get type():Shape{
            return this._type
        }
    }
    class Circle{
        private _radiusSize:number
        private _type=Shape.circle
        constructor(sideSize){
            this._radiusSize=sideSize
        }
        public get sideSize():number{
            return this._radiusSize
        }
        public get type():Shape{
            return this._type
        }
    }

    class Calculator{
        private _shapes:any[]=[]
        constructor(shapes:any[]){
            this._shapes=shapes
        }
        public calculateAllAreas():number{
            return this._shapes.reduce((acc,shape)=>{

                if(shape.type===Shape.circle){
                     acc+=Math.PI*shape.sideSize**2
                }
                // якщо ми захочемо додати якусь фігури треба буде давати ще один if
                if(shape.type===Shape.square){
                     acc+=shape.sideSize**2
                }
                return acc
            },0)
        }
    }


    const res = new Calculator([new Square(5),new Circle(0)])

    console.log(res.calculateAllAreas());
    

}


namespace correct{



abstract class Shape {
    abstract getArea():number
}

class Circle extends Shape{
    private _sideSize:number
    constructor(sideSize){
        super()
        this._sideSize=sideSize
    }
  getArea(): number {
      return Math.PI*this._sideSize**2
  }
}
class Square extends Shape{
    private _sideSize:number
    constructor(sideSize){
        super()
        this._sideSize=sideSize
    }
  getArea(): number {
      return this._sideSize**2
  }
}
class AreaCalculator{
    shapes:Shape[]=[]
    sum:number

    constructor(shapes:Shape[]){
        this.shapes=shapes
    }
    calculateAllAreas(){
        this.sum=this.shapes.reduce((acc,e)=>acc+=e.getArea(),0)
        return this.sum
    }
}


const res = new AreaCalculator([new Square(5),new Circle(0)])

console.log(res.calculateAllAreas());










}