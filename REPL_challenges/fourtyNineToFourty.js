// ----------------------------------------------
// 49
// Write a function called "addFullNameProperty".
// Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space.
// var person = {
//   firstName: 'Jade',
//   lastName: 'Smith'
// };
// addFullNameProperty(person);
// console.log(person.fullName); // --> 'Jade Smith'

var person = {
    firstName: 'Jade',
    lastName: 'Smith'
  };
  
  function addFullNameProperty(person) {
    // your code here
    if (person) {
    return fullName = person.firstName + " " + person.lastName;
    }
  };
  
  console.log(addFullNameProperty(person));

// ----------------------------------------------
// 48
// Write a function called "addObjectProperty".
// Given two objects and a key, "addObjectProperty" sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.
// var person1 = {
//   name: 'Joe Blow',
//   role: 'schlub'
// };
// var person2 = {
//   name: 'Mr. Burns',
//   role: 'supervisor'
// };
// addObjectProperty(person1, 'manager', person2);
// console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }
let person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};

let person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};

function addObjectProperty(obj1, key, obj2) {
  // your code here
  obj1[key] = obj2
};

addObjectProperty(person1, 'manager', person2);

console.log(person1.manager);