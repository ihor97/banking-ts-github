// interface User {
//     name:string,
//     age:number,
//     role:string
// }
// type Person=unknown
const persons = [
    {
        name: 'ivan',
        age: 23,
        occupation: 'butcher'
    },
    {
        name: 'ihor',
        age: 23,
        occupation: 'butcher'
    },
    {
        name: 'ihor',
        age: 23,
        role: 'butcher'
    }
];
function logUser(user) {
    console.log(`${user.name} ${user.age}`);
}
persons.forEach(logUser);
//# sourceMappingURL=app.js.map