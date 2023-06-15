
// інтерфейс опис класу але не його релізація

// interface IExample{
//     name:string;
//     count:number;
//     // опис методу в інтерфейсі
//     convert?(g:number):string
// }
// let example:IExample={
//     count:1,
//     name:'ee'
// }
// console.log((<IExample>example).count);//ми то можемо скастувати але не факт що обєкт буде мати всі поля

// правило по якому має бути створнеий клас
// interface IExample{
//     name:string;
//     count:number;
//     link?:string
//     // опис необовязкового методу в інтерфейсі 
//     convert?(g:number):string;
    
// }
// // реалізація класу по інтерфейсу

// class Example implements IExample{
//     public name:string
//     public count: number;
//     public title:string
//     public convert(g:number):string{
//         return ''
//     }
// }


///////////////////////////////////////////
 interface IExample{
        name:string;
        count:number;
        link?:string
        // опис методу в інтерфейсі
        convert?(g:number):string
    }
    // наслідування інтрефейсів
    interface IExampleChildren extends IExample{
        prop1:string
    }
    
    let exampleChildren:IExampleChildren={
        count:1,
        name:'sss',
        prop1:'1111',
        convert(g:number):string{
            return ''
        }
    }












