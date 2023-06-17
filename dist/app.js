class BeeKeeper {
    constructor() {
        this.hasMask = false;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = 'tag';
    }
}
class Animal {
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
// можна використовувати тільки конструктори які унаслідуються від Animal
function createInstance(c) {
    return new c();
}
console.log(createInstance(Lion).keeper.nametag);
console.log(createInstance(Bee).keeper.hasMask);
//# sourceMappingURL=app.js.map