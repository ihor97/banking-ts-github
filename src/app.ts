

// queueMicrotask() дає нам змогу засувати у виконання мікротасків якісь колбеки
// async - синтаксичний цукор над роботою з промісом 
async function func() {
    console.log('зайшли в ф-ю');
    let promise=new Promise((res,rej)=>{
        setTimeout(() => {
            res('виклнання проміса')
        }, 2000);
    })
console.log('резолвимо проміс');

    let res=await promise
    console.log(res);
    console.log('завершення');
    
    
    
}

func()