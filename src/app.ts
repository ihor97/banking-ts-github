abstract class AbstractExample{
    public length:number
}

class ExampleA extends AbstractExample{

}
class ExampleB extends AbstractExample{
}
class ExmpleOther{

}
// обмеження в generic в тип Т залітає тільки те що унаслідовано від AbstractExample
// ExmpleOther ми не зможемо передати
function result<T extends AbstractExample>(val:T):T {
    return  val
}
