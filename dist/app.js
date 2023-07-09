// кастомний простір імен 
// типу як в класі є поля так і в namespace є класи
// дозволяє розграничити області 
// також можуть бути namespace всередині namespace
var CustomNameSpace;
(function (CustomNameSpace) {
    class Example {
    }
    CustomNameSpace.Example = Example;
    function name(params) {
    }
    CustomNameSpace.name = name;
})(CustomNameSpace || (CustomNameSpace = {}));
class Example {
}
// так можна зробити так щоб не писати багато разів CustomNameSpace
var b = CustomNameSpace;
let g = new CustomNameSpace.Example();
//# sourceMappingURL=app.js.map