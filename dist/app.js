// this && this.__extends перевірка на this і чи є властивість __extends
var __extends = (this && this.__extends) || (function () {

    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||

            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
// створення ф-ї Object.setPrototypeOf
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        // якщо не ф-я то ексепшн
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    //    
            extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var classBase = /** @class */ (function () {
    function classBase(p1, p2, p3) {
        this.property1 = p1;
        this.property2 = p2;
        this._property3 = p3;
    }
    classBase.prototype.getInfo = function () {
        return "prop1 ".concat(this.property1, " prop2 ").concat(this.property2, " prop3 ").concat(this._property3);
    };
    return classBase;
}());
var ClassA = /** @class */ (function (_super) {
    __extends(ClassA, _super);
    function ClassA() {
        // super це є classBase
        return _super.call(this, 1, 'класс А', true) || this;
    }
    return ClassA;
}(classBase));
var ClassB = /** @class */ (function (_super) {
    __extends(ClassB, _super);
    function ClassB() {
        return _super.call(this, 1, 'класс B', false) || this;
    }
    return ClassB;
}(classBase));
var A = new ClassA();
var B = new ClassB();
console.log(A.getInfo());
console.log(B.getInfo());
