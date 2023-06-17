class Control {
    constructor() {
    }
}
class TextBox extends Control {
    constructor() {
        super();
    }
    setValue(val) {
        this.value = val;
    }
}
class CheckBox extends Control {
    constructor() {
        super();
    }
    setValue(val) {
        this.value = val;
    }
}
const textBox = new TextBox();
textBox.setValue('wsss');
//# sourceMappingURL=app.js.map