// вказуємо класу з яким типом йому працювати при його створенні
class Example<T>{
    private _id:T
    constructor(id:T){
        this._id=id
    }
    public getId():T{
        return this._id
    }
}
// показує класу з яким типом він має працювати
const example1=new Example<number>(3)
const example2=new Example<string>('eee')