// типи ф-й

type typeFuncPrint=(a:number,b:number,c:number)=>void

let p:typeFuncPrint=function (a:number,b:number,c:number) {
    console.log(a,b,c);
    
}

function previewCalculate(start:Array<number>,print:typeFuncPrint) {
    start.forEach(a=>{
        start.forEach(b => {
            print(a,b,a+b)
        });
    })
}

previewCalculate([1,2,3,4,5],p)