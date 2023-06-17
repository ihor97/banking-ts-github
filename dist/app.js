// шаблонний тип Т який ми можемо підставляти в залежності від того який тип Т ми вказуємо
// дозволяє не дублювати код
// function result<T>(value:T):T {
//     return value
// }
// // в трикутних скобках типізуємо ф-ю
// result<number>(1)
// можна і так result(1)
// запис для масиву
// function  result<T>(value:Array<T>):Array<T> {
//     console.log(value.length);
//     return value
// }
// result<string>(['1','2'])
//# sourceMappingURL=app.js.map