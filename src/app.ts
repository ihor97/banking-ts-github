let key='[variable]'
let template=`_method_${key}_parametrs`
let metadata={}
// фабрика декораторів  - вертає декоратор  резолвить якусь нову ф-ю
function decorateParametr():(target:Object,method:string,index:number)=>void {
    return (target:Object,method:string,index:number)=>{
        // 
        let metadataKey=template.replace(key,method)

        if(!metadata[metadataKey]){
            metadata[metadataKey]=[]
        }

        metadata[metadataKey].push(index)
    }
}

function decorateMethod(str:string):(target:Object,method:string,
    descriptor:PropertyDescriptor)=>void {
    return (target:Object,method:string,descriptor:PropertyDescriptor)=>{

        let originalMethod=descriptor.value
        descriptor.value =function (...args:any[]) {
            let parametrIndex=template.replace(key,method)
            var indices=metadata[parametrIndex]

            let argsWithValue=''

            for(var i=0;i<args.length;i++){
                if(indices.indexOf(i)!==-1){
                    var arg=args[i]
                    var argStr=JSON.stringify(arg)|| args.toString()
                    argsWithValue+=`arg[${i}]:${argStr}`
                }
            }

            console.log(`
            Декоратор с параметром = '${str}' 
            вызван дял метода '${method}' 
            параметры ${argsWithValue} 
            екземпляр класа '${target.constructor.name}' 
            `);
            return originalMethod.apply(this,args)
        }
    }
}

class Example{
    private _a:string
    @decorateMethod('кастомний параметр')
    public exec(@decorateParametr() a:string,@decorateParametr()b:string,@decorateParametr()c:string){
        this._a=a
    }

}

let tom=new Example()
tom.exec('Параметр 1','Параметр 2','Параметр 3')
tom.exec('Параметр 4','Параметр 5','Параметр 6')
tom.exec('Параметр 7','Параметр 8','Параметр 9')


