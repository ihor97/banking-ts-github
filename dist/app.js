// кастомний простір імен 
// типу як в класі є поля так і в namespace є класи
// дозволяє розграничити області 
var CustomNameSpace;
(function (CustomNameSpace) {
    class Example {
    }
    CustomNameSpace.Example = Example;
})(CustomNameSpace || (CustomNameSpace = {}));
class Example {
}
let g = new CustomNameSpace.Example();
//# sourceMappingURL=app.js.map