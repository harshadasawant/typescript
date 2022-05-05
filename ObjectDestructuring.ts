//prior Es6
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

let name1 = user.name;
let age1 = user.age;
console.log(name1, age1);

// ES6 onwards

const user1 = { 
    'name2': 'Alex',
    'address2': '15th Park Avenue',
    'age': 43
}

const { address2: permanentAddress } = user1;
const { address2 } = user1;

console.log(permanentAddress); // 15th Park Avenue
console.log(address2); // 15th Park Avenue

// nested object
const user2 = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
}

const { department } = user2;
console.log('dept--',department)
const { department: { address } } = user2;
console.log('add--',address)
const { department: { address: { city } } } = user2;
console.log('city--',city)

