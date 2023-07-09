// типи ф-й
let p = function (a, b, c) {
    console.log(a, b, c);
};
function previewCalculate(start, print) {
    start.forEach(a => {
        start.forEach(b => {
            print(a, b, a + b);
        });
    });
}
previewCalculate([1, 2, 3, 4, 5], p);
//# sourceMappingURL=app.js.map