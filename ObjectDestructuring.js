//prior Es6
var user = {
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
};
var name1 = user.name;
var age1 = user.age;
console.log(name1, age1);
// ES6 onwards
var user1 = {
    'name2': 'Alex',
    'address2': '15th Park Avenue',
    'age': 43
};
var permanentAddress = user1.address2;
var address2 = user1.address2;
console.log(permanentAddress); // 15th Park Avenue
console.log(address2); // 15th Park Avenue
// nested object
var user2 = {
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department': {
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
};
var department = user2.department;
console.log('dept--', department);
var address = user2.department.address;
console.log('add--', address);
var city = user2.department.address.city;
console.log('city--', city);
