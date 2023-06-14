// типи ф-й
// делегат - силка на ф-ю
// запис ф-й тобто робимо функцію деякого типу
// const add:(a:number,b:number)=>number=function (a:number,b:number) {
//     return a+b
// }

// тип для ф-ї

// type typeAdd1=(a:number, b:number)=>string
// type typeAdd2=(a:number, b:string)=>string

// const add:typeAdd1=function (a:number,b:number) {
//     return (a+b).toString()
// }

// let veryfyType:boolean

// if (add as typeAdd1){
//     console.log(add(1,2));
    
// }


// type typeFuncprint=(a:number,b:number,c:number)=>void
// let p:typeFuncprint=function (a:number,b:number,c:number) {
//     console.log(`${a}+${b}+${c}`);
// }
// // print:typeFuncprint мусить приймати ф-ю з таким типом
// function previewCalculate(start:number[],print:typeFuncprint) {
//     start.forEach(a=>{
//         start.forEach(b=>{
//             print(a,b,a+b)
//         })
//     })
// }
// let g:()=>void=function () {
//     console.log('dd');
    
// }
// передаємо силку на ф-ю 
// previewCalculate([1,2,3,4,5],p)


// необовязкові параметри
// function getname(str:string,str1?:string,str2?:string) {
//     return str +' '+ str1+' '+str2
// }

// function addnumbers(a:number,...arrays:number[]):number {
//     let res=a
//     arrays.forEach(n=>{
//         res+=n
//     })
//     return res
// }
// let num1=addnumbers(1,2,3,4)
// console.log(num1);

// перегрузка ф-ї
function add(x:string,y:string):string;
function add(x:number,y:number) :number;
function add(x:any,y:any):any {
    return x+y
}
// Ctrl+Shift+Space і треба поставити курсор всередині дужок метода тоді можна получити перегрузки які є в ф-ї
// перегрузка мождива тому що це все компілиться в js і всі типи пропадають 
let res=add(1,2)    
let res1=add('1','2')
