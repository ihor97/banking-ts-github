// типи ф-й
// делегат - силка на ф-ю
// запис ф-й тобто робимо функцію деякого типу
// const add:(a:number,b:number)=>number=function (a:number,b:number) {
//     return a+b
// }
function add(x, y) {
    return x + y;
}
// Ctrl+Shift+Space і треба поставити курсор всередині дужок метода тоді можна получити перегрузки які є в ф-ї
// перегрузка мождива тому що це все компілиться в js і всі типи пропадають 
let res = add(1, 2);
let res1 = add('1', '2');
//# sourceMappingURL=app.js.map