var System;
(function (System) {
    System[System["Linux"] = 0] = "Linux";
    System[System["Windows"] = 1] = "Windows";
    System[System["MacOs"] = 2] = "MacOs";
})(System || (System = {}));
const obj1 = {
    prop1: 'hello rtf',
    prop2: false
};
const obj2 = {
    prop1: 'hello ufu',
    prop2: true
};
const obj3 = {
    prop1: 'hello mir',
    prop2: true
};
const obj4 = {
    prop1: undefined,
    prop2: () => {
        return new Date();
    }
};
const obj5 = {
    prop1: undefined,
    prop2: () => {
        return new Date(2021, 3, 1);
    }
};
const obj6 = {
    prop1: 'cats',
    prop2: true,
    prop3: System.Linux
};
const obj7 = {
    prop1: 'cats',
    prop2: true,
    prop3: System.Windows
};
const array = [obj1, obj2, obj3, obj4, obj5, obj6, obj7];
// фільтрація по типу 
function filter(arr, type) {
    const res = arr.filter(e => {
        // будемо робити перевірку на основі дожини масиву ключів обєкта що попадає
        let size = Object.keys(e).length;
        if (type == 'FirstType') {
            return size == 2 && typeof e.prop2 === 'boolean';
        }
        if (type == 'SecondType') {
            return size == 2 && typeof e.prop2 === 'function';
        }
        if (type == 'ThirdType') {
            return size == 3;
        }
        return false;
    });
    return res;
}
console.log(filter(array, 'FirstType'));
console.log(filter(array, 'SecondType'));
console.log(filter(array, 'ThirdType'));
//# sourceMappingURL=app.js.map