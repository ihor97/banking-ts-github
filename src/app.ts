// interface User {
//     name:string,
//     age:number,
//     role:string
// }
// type Person=unknown

// // робимо інтерфейсів обєднання

// const persons:User[]=[
//     {
//         name:'ivan',
//     age:23,
//     occupation:'butcher'
//     },
//     {
//         name:'ihor',
//     age:23,
//     occupation:'butcher'
//     },
//     {
//         name:'ihor',
//     age:23,
//     role:'butcher'
//     }
// ]

// function logUser(user:Person) {
//     console.log(`${user.name} ${user.age}`);
// }

// persons.forEach(logUser)

interface Admin {
    name: string,
    age: number,
    role: string
}
interface User {
    name: string,
    age: number,
    occupation: string
}
// робимо інтерфейсів обєднання
type Person = Admin | User

const persons: Person[] = [
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
]

function logUser(user: Person) {
    console.log(`${user.name} ${user.age}`);
}

persons.forEach(logUser)