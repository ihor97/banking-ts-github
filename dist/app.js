// interface User {
//     type: 'user';
//     name:string;
//     age:number;
//     occupation:string
// }
// interface Admin {
//     type: 'admin';
//     name:string;
//     age:number;
//     role:string
// }
const persons = [
    {
        type: 'user',
        name: 'Max Musterman',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        type: 'admin',
        name: 'Jane Joe',
        age: 27,
        role: 'Administrator'
    },
    {
        type: 'admin',
        name: 'Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 64,
        occupation: 'ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];
// приводимо до типу якщо виконується умова
const isAdmin = (person) => person.type === 'admin';
const isUser = (person) => person.type === 'user';
function logPerson(person) {
    let additionalInfo = '';
    if (isAdmin(person)) {
        additionalInfo = person.role;
    }
    if (isUser(person)) {
        additionalInfo = person.occupation;
    }
    console.log(`- ${person.name},${person.age},${additionalInfo}`);
}
//# sourceMappingURL=app.js.map