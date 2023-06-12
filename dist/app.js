// абстрактні класи
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
// від нього не можна створити обєкт
// від них можн наслідуватися 
// консолідує в собі базову логіку для дочірних класів
// абстрактний клас задає нам рамки 
// більше для розробників що їм треба дещо реалізувати
var TypeControl;
(function (TypeControl) {
    TypeControl[TypeControl["Input"] = 0] = "Input";
    TypeControl[TypeControl["Select"] = 1] = "Select";
})(TypeControl || (TypeControl = {}));
// // так у нас нема можливості створити обєкт через Control
// якщо ми помітимо клас як абстрактний тоді ми не будемо запутувати розробників так що вони не зможуть створити від нього інстанс
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
    return Control;
}());
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        var _this = _super.call(this, TypeControl.Input) || this;
        _this._length = 1;
        return _this;
    }
    Object.defineProperty(TextBox.prototype, "getLength", {
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    TextBox.prototype.getInfo = function () {
        return "Control:name =".concat(this.name, " \u0434\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438 =").concat(this._length);
    };
    return TextBox;
}(Control));
var SelectBox = /** @class */ (function (_super) {
    __extends(SelectBox, _super);
    function SelectBox(items) {
        if (items === void 0) { items = []; }
        var _this = _super.call(this, TypeControl.Select) || this;
        _this._items = items;
        return _this;
    }
    SelectBox.prototype.getInfo = function () {
        // в d попаде first а в с second якщо не ініціалізувати d
        var str = this._items.reduce(function (d, c) { return d + '; ' + c; });
        return "Control:name =".concat(this.name, " SelectBox variants =").concat(str);
    };
    return SelectBox;
}(Control));
var textbox = new TextBox();
console.log(textbox.getInfo());
var selectBox = new SelectBox(['first', 'second', 'third']);
console.log(selectBox.getInfo());
