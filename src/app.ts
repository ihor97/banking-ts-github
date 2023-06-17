class ExampleA{
    public f:number

}
class ExampleB{
    public f:string
}
// використання для класів
function result<T>(value:T):T {
    return value
}
console.log(result<ExampleB>(new ExampleB()));
