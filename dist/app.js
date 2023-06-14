// type User=unknown
// const users:unknown[]=[
//     {
//         name:'ivan',
//     age:23,
//     occupation:'butcher'
//     },
//     {
//         name:'ihor',
//     age:23,
//     occupation:'butcher'
//     }
// ]
const users = [
    {
        name: 'ivan',
        age: 23,
        occupation: 'butcher'
    },
    {
        name: 'ihor',
        age: 23,
        occupation: 'butcher'
    }
];
function logUser(user) {
    console.log(`${user.name} ${user.age}`);
}
users.forEach(logUser);
//# sourceMappingURL=app.js.map