// Dependency Inversion -
// модули верхнього рівня не повинні заледати від модулів нижнього рівня. ті і інші мусять залежати від абстрацій
//  Абстракції не повинні залежати від деталей, деталі мусять залежати від абстракцій
// в нас може бути клас User і є клас Логер який відповідає за те щоб зберігати помилки 
// логер це не є наша бізнес логіка він потрібен нам а не апці щоб вона працювала
// тобто високорівнева політика не має залежати від таких класів як логер
// щоб вирішити це ми створемо інтерфейс ILogger User буде залежати від інтерфейса

namespace incorrect {

    class Clioutput {
        public print(message): void {
            console.log(message);

        }
    }

    class Cat {
        public meow(): void {
            const cliOutput = new Clioutput()
            cliOutput.print('meow')
        }
    }

    const cat = new Cat()
    cat.meow()








}


namespace correct {
// тобто тут робимо таку залежність Cat -> IOutput <- Clioutput
    interface IOutput {
        print(message: string): void
    }

    class Clioutput implements IOutput {
        public print(message): void {
            console.log(message);

        }
    }
    class Screenoutput implements IOutput{
        public print(message: string): void {
            // logic 
        }
    }

    class Cat {
        // тобто код залежить від інтерфейса
        constructor(private output: IOutput) { }

        public meow(): void {
            this.output.print('meow')
        }
    }
// в аннуларі є isDevMode()
// тобто ми в клас кота не ліземо 
    // const cat = new Cat( isDevMode() ? new Clioutput() : new Screenoutput())
    const cat = new Cat(new Clioutput())






}