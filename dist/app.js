class Control {
    constructor() {
    }
    // у нас є три різні методи getinfo
    getinfo() {
        return `Обычная иформация о контроле`;
    }
}
class TextBox extends Control {
    constructor() {
        super();
    }
    // поліморфізм
    getinfo() {
        return `Инфа о контроле TextBox`;
    }
}
class SelectBox extends Control {
    constructor() {
        super();
    }
}
class CheckBox extends Control {
    constructor() {
        super();
    }
    // поліморфізм
    getinfo() {
        let baseInfo = super.getinfo();
        return `${baseInfo}, а также инфа с CheckBox`;
    }
}
const textBox = new TextBox();
console.log(textBox.getinfo());
const selectBox = new SelectBox();
console.log(selectBox.getinfo());
const checkBox = new CheckBox();
console.log(checkBox.getinfo());
//# sourceMappingURL=app.js.map