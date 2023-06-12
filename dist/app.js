var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeControl;
(function (TypeControl) {
    TypeControl[TypeControl["Input"] = 0] = "Input";
    TypeControl[TypeControl["Select"] = 1] = "Select";
})(TypeControl || (TypeControl = {}));
var Control = /** @class */ (function () {
    function Control(tc) {
        this._type = tc;
    }
    Object.defineProperty(Control.prototype, "name", {
        get: function () {
            var result = '';
            switch (this._type) {
                case TypeControl.Input:
                    result = 'Ввод текста';
                    break;
                case TypeControl.Select:
                    result = 'выбор значения с списка';
                    break;
            }
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Control.prototype.getInfo = function () {
        // name - це геттер
        return "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: ".concat(this.name);
    };
    return Control;
}());
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        var _this = 
        // через super викликається базовий конструктор
        _super.call(this, TypeControl.Input) || this;
        _this._length = 1;
        return _this;
    }
    // викликаємо метод з батьківського класу і допилюємо йому вивід _length
    // тут деякий варіант поліморфізму тому що переоприділяємо поведінку батьківського методу
    TextBox.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ' ' + this._length;
    };
    return TextBox;
}(Control));
var SelectBox = /** @class */ (function (_super) {
    __extends(SelectBox, _super);
    function SelectBox() {
        return _super.call(this, TypeControl.Select) || this;
    }
    return SelectBox;
}(Control));
var textbox = new TextBox();
console.log(textbox.getInfo());
var selectBox = new SelectBox();
console.log(selectBox.getInfo());
