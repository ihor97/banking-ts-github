//  якщо ми ставимо тут  експорт цей файл тоді розцінюється як модуль 
// і в другому файлі ми вде так просто не отримаємо доступ до єнума
  enum Priority{
    High=1,
    Low=2
}
let index=0
 class Process{
    public name:string
    public index:number
    public prority:Priority
    constructor(n:string){
        this.name=n
        this.index=index
        this.prority=Priority.Low
    }
}
// краще обєлнувати так
// кожен файл має найкраще зберігати в собі один клас або ф-ю і тд
export {Priority,Process}