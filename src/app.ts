// interface segregation principle
// прицип служить для того щоб могла бути постійність: клас батько і клас потомок можуть використовуватися однаковим чином без нарушення роботи програми
// типу як single responsibility але в плані інтерфейсів (не треба пхати всі аідряд методи в інтерфейс )

namespace incorrect{
interface Programmer{
    writeCode():void
    eatPizza(slicesCount:number):void
}

class RegularProgrammer implements Programmer{
    public writeCode(): void {
        console.log('I write code');
    }
    public eatPizza(slicesCount: number): void {
        console.log( 'eating');
        
    }
}
    class FreeLancer implements Programmer {
        public writeCode(): void {
            console.log('I write code');
        }
        public eatPizza(slicesCount: number): void {
            throw new Error('не можу!')
            
        }
    }





}


namespace correct{

interface CodeProducer{
    writeCode():void
}
interface PizzaEater{
    eatPizza(slicesCount: number):void
}

class RegularProgrammer implements CodeProducer,PizzaEater{
    public writeCode(): void {
        console.log('I write code');
    }
    public eatPizza(slicesCount: number): void {
        console.log( 'eating');
        
    }
}
    class FreeLancer implements CodeProducer {
        public writeCode(): void {
            console.log('I write code');
        }
        
    }


}