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

//  type Person=User | Admin

//  const persons:Person[]=[
//     {
//         type:'user',
//         name:'Max Musterman',
//         age:25,
//         occupation:'Chimney sweep'
//     },
//     {
//         type:'admin',
//         name:'Jane Joe',
//         age:27,
//         role:'Administrator'
//     },
//     {
//         type:'admin',
//         name:'Willis',
//         age:64,
//         role:'World saver'
//     },
//     {
//         type:'user',
//         name:'Wilson',
//         age:64,
//         occupation:'ball'
//     },
//     {
//         type:'admin',
//         name:'Agent Smith',
//         age:23,
//         role:'Administrator'
//     }
// ]

//  const isAdmin=(person:Person)=>person.type==='admin'
//  const isUser=(person:Person)=>person.type==='user'

//  function logPerson(person:Person) {
//     let additionalInfo=''
//     if(isAdmin(person)){
//         additionalInfo=person.role
//     }
//     if(isUser(person)){
//         additionalInfo=person.occupation
//     }
//     console.log(`- ${person.name},${person.age},${additionalInfo}`);
    
// }

// рішення 
interface User {
    type: 'user';
    name:string;
    age:number;
    occupation:string
}
interface Admin {
    type: 'admin';
    name:string;
    age:number;
    role:string
}

 type Person=User | Admin

 const persons:Person[]=[
    {
        type:'user',
        name:'Max Musterman',
        age:25,
        occupation:'Chimney sweep'
    },
    {
        type:'admin',
        name:'Jane Joe',
        age:27,
        role:'Administrator'
    },
    {
        type:'admin',
        name:'Willis',
        age:64,
        role:'World saver'
    },
    {
        type:'user',
        name:'Wilson',
        age:64,
        occupation:'ball'
    },
    {
        type:'admin',
        name:'Agent Smith',
        age:23,
        role:'Administrator'
    }
]
// приводимо до типу якщо виконується умова
 const isAdmin=(person:Person):person is Admin=>person.type==='admin'
 const isUser=(person:Person):person is User=>person.type==='user'

 function logPerson(person:Person) {
    let additionalInfo=''
    if(isAdmin(person)){
        additionalInfo=person.role
    }
    if(isUser(person)){
        additionalInfo=person.occupation
    }
    console.log(`- ${person.name},${person.age},${additionalInfo}`);
    
}