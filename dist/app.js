// interface segregation principle
// прицип служить для того щоб могла бути постійність: клас батько і клас потомок можуть використовуватися однаковим чином без нарушення роботи програми
// типу як single responsibility але в плані інтерфейсів (не треба пхати всі аідряд методи в інтерфейс )
var incorrect;
(function (incorrect) {
    class RegularProgrammer {
        writeCode() {
            console.log('I write code');
        }
        eatPizza(slicesCount) {
            console.log('eating');
        }
    }
    class FreeLancer {
        writeCode() {
            console.log('I write code');
        }
        eatPizza(slicesCount) {
            throw new Error('не можу!');
        }
    }
})(incorrect || (incorrect = {}));
var correct;
(function (correct) {
    class RegularProgrammer {
        writeCode() {
            console.log('I write code');
        }
        eatPizza(slicesCount) {
            console.log('eating');
        }
    }
    class FreeLancer {
        writeCode() {
            console.log('I write code');
        }
    }
})(correct || (correct = {}));
//# sourceMappingURL=app.js.map