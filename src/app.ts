

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

// function logUser(user:User) {
//     console.log(`${user.name} ${user.age}`);
// }

// users.forEach(logUser)

// рішення
type User={
    name:string,
    age:number,
    occupation:string
}

const users:User[]=[
    {
        name:'ivan',
    age:23,
    occupation:'butcher'
    },
    {
        name:'ihor',
    age:23,
    occupation:'butcher'
    }
]

function logUser(user:User) {
    console.log(`${user.name} ${user.age}`);
}
users.forEach(logUser)
