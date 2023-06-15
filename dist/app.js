class Control {
    constructor() { }
}
// текстбокси працюють тільки з string
class TextBox extends Control {
    constructor() {
        super();
    }
    setValue(val) {
        this.value = val;
    }
}
// чекбокси працюють тільки з boolean
class CheckBox extends Control {
    constructor() {
        super();
    }
    setValue(val) {
        this.value = val;
    }
}
let textBox = new TextBox();
textBox.setValue('string');
let checkBox = new CheckBox();
checkBox.setValue(true);
//# sourceMappingURL=app.js.map