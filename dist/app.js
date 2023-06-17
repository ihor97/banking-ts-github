class Model {
    constructor(entity) {
        this.entity = entity;
    }
    getValueKey(key) {
        return this.entity[key];
    }
    update(partial) {
        Object.assign(this.entity, partial);
    }
}
let json = '{"name":"animal","age":0}';
let entity = JSON.parse(json);
let animalModel = new Model(entity);
console.log(animalModel);
console.log(animalModel.getValueKey('name'));
let newjson = '{"name":"newanimal"}';
let newentity = JSON.parse(newjson);
animalModel.update(newentity);
console.log(animalModel.getValueKey('name'));
console.log(animalModel);
//# sourceMappingURL=app.js.map