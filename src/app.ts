class Car{


    public readonly array:string[]
    // захищаємо масив через гетер
    public get arr():string[]{
        return this.array.map(g=>g)
    }

    constructor(a:string[]){
        this.array=a
       
    }
}

const car1=new Car(['d','dd','cwcw'])
car1.arr.push('scc')
car1.arr.push('scc')
console.log(car1.arr);
