
// умовні типи 

class Example{
    foo:string
}
class ExampleChildreb extends Example{

}

class OtherExample{

}
// умовні переходи якщо в змінну Т переходить тип який задовільняє умову то получаємо різеі значення
type genericExample<T>=T extends Example ? 'foo'|'bar':'qwe'
let h:genericExample<ExampleChildreb>
h="bar"