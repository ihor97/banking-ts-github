function decoratorMethod(target:Object,propKey:string,descriptor:TypedPropertyDescriptor<any>):TypedPropertyDescriptor<any> {
    console.log(target);
    console.log(propKey);
    console.log(descriptor);
    return descriptor
}
class Test{
    // отримуємо інфу по методу exec 
    @decoratorMethod
    public exec (){

    }
}