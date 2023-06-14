enum System{
    Linux=0,
    Windows=1,
    MacOs=2
}
type FirstType={
    prop1:string,
    prop2:boolean
}
type SecondType={
    prop1:typeof undefined,
    prop2:()=>Date
}
type ThirdType={
    prop1:string,
    prop2:boolean,
    prop3:System
}
const obj1:FirstType={
    prop1:'hello rtf',
    prop2:false
}
const obj2:FirstType={
    prop1:'hello ufu',
    prop2:true
}
const obj3:FirstType={
    prop1:'hello mir',
    prop2:true
}
const obj4:SecondType={
    prop1:undefined,
    prop2:()=>{
        return new Date()
    }
}
const obj5:SecondType={
    prop1:undefined,
    prop2:()=>{
        return new Date(2021,3,1)
    }
}
const obj6:ThirdType={
    prop1:'cats',
    prop2:true,
    prop3:System.Linux
}
const obj7:ThirdType={
    prop1:'cats',
    prop2:true,
    prop3:System.Windows
}

const array=[obj1,obj2,obj3,obj4,obj5,obj6,obj7]
// фільтрація по типу 
function filter(arr:Array<FirstType|SecondType|ThirdType>,type:string) {
  const res=  arr.filter(e=>{
    // будемо робити перевірку на основі дожини масиву ключів обєкта що попадає
        let size = Object.keys(e).length
        if(type=='FirstType'){
            return size==2&& typeof e.prop2==='boolean'
        }
        if(type=='SecondType'){
            return size==2&& typeof e.prop2==='function'
        }
        if(type=='ThirdType'){
            return size==3
        }
        return false
    })
    return res
}
console.log(filter(array,'FirstType'));
console.log(filter(array,'SecondType'));
console.log(filter(array,'ThirdType'));