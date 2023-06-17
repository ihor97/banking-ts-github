class BeeKeeper{
    hasMask:boolean=false
}

class ZooKeeper{
    nametag:string='tag'
}

class Animal{
    numLegs:number
}
class Bee extends Animal{
    keeper:BeeKeeper=new BeeKeeper()
}
class Lion extends Animal{
    keeper:ZooKeeper=new ZooKeeper()
}
// можна використовувати тільки конструктори які унаслідуються від Animal
function createInstance<TAnimal extends Animal>(c:new ()=>TAnimal):TAnimal {
    return new c()
}
console.log(createInstance(Lion).keeper.nametag);
console.log(createInstance(Bee).keeper.hasMask);