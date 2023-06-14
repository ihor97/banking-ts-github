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
// можна зробити обмеження для приймаємого типу 
// Pick дозволяє вибрати декілька параметрів з обєкта і привести його до деякого типу
// Pick в даній області видимості дозволяє юзати тип не як повноцінний тип User а як тільки обєкт з одним полем age при тому він розглядається як тип юзер
//   criteria:Pick<User,'age'> Pick  бере з обєкта тільки поле age
function filterUser(persons:Person[],criteria:Pick<User,'age'>):User[] {
    return persons.filter(isUser).filter(user=>{
        // The keyof operator takes an object type and produces a string or numeric literal union of its keys.
        const criteriaKeys=Object.keys(criteria) as (keyof User)[]
        return criteriaKeys.every(fieldName=>{
            return user[fieldName]===criteria[fieldName]
        })
    })
}
console.log(filterUser(
    persons,
    {
        age:25
    }
));