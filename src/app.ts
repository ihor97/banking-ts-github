// декоратор метода
// propKey - назва методу в класі
function decoratorMethod(target:Object,propKey:string,
    descriptor:TypedPropertyDescriptor<any>):TypedPropertyDescriptor<any> {
    // обєкт в якому будемо міняти метод 
    console.log(target);
// назва метода в класі
    console.log(propKey);
    // інформація про поле
    console.log(descriptor);
    return descriptor
}

// декоратор класу

function decoratorClass<TFunction extends Function>(target :TFunction ):TFunction {
    let newConstructor:Function=function () {
        console.log('exec newConstructor');
        
    }
    return <TFunction>newConstructor
}