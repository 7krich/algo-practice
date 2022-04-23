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
  // bracket notation needed to access variable
  obj1[key] = obj2
};

addObjectProperty(person1, 'manager', person2);

console.log(person1.manager);

// ----------------------------------------------
// 47
// Write a function called "isPersonOldEnoughToDrinkAndDrive".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States.
// Notes:* The legal drinking age in the United States is 21.* The legal driving age in the United States is 16.* It is always illegal to drink and drive in the United States.
// var obj = {
//   age: 45
// };
// var output = isPersonOldEnoughToDrinkAndDrive(obj);
// console.log(output); // --> false

let obj = {
  age: 45
};

function isPersonOldEnoughToDrinkAndDrive(person) {
  // your code here
  if (person.age) {
    return false
  }
  return true;
};

console.log(isPersonOldEnoughToDrinkAndDrive(obj));

// ----------------------------------------------
// 46
// Write a function called "isPersonOldEnoughToDrive".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.
// Notes:* The legal driving age in the United States is 16.
// var obj = {
//   age: 16
// };
// var output = isPersonOldEnoughToDrive(obj);
// console.log(output); // --> true

let obj = {
  age: 16
};

function isPersonOldEnoughToDrive(person) {
  // your code here
  if (person.age > 15) {
    return true;
  }
  return false;
};

let output = isPersonOldEnoughToDrive(obj)
console.log(output);

// ----------------------------------------------
// 45
// Write a function called "isPersonOldEnoughToVote".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.
// Notes:* The legal voting age in the United States is 18.
// var obj = {
//   age: 19
// };
// var output = isPersonOldEnoughToVote(obj);
// console.log(output); // --> true

let obj = {
  age: 19
};

function isPersonOldEnoughToVote(person) {
  // your code here
  if (person.age > 17) {
    return true;
  }
  return false;
};

let output = isPersonOldEnoughToVote(obj);
console.log(output);

// ----------------------------------------------
// 44
// Write a function called "isPersonOldEnoughToDrink".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrink" returns whether the given person is old enough to drink.
// Notes:* The legal drinking age in the United States is 21.
// var obj = {
//   age: 16
// };
// var output = isPersonOldEnoughToDrink(obj);
// console.log(output); // --> false

let obj = {
  age: 16
};

function isPersonOldEnoughToDrink(person) {
  // your code here
  if (person.age > 20) {
    return true;
  }
  return false;
}

let output = isPersonOldEnoughToDrink(obj);
console.log(output);

// ----------------------------------------------
// 43
// Write a function called "addArrayProperty".
// Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.
// var myObj = {};
// var myArray = [1, 3];
// addArrayProperty(myObj, 'myProperty', myArray);
// console.log(myObj.myProperty); // --> [1, 3]

let myObj = {};
let myArray = [1, 3];

function addArrayProperty(obj, key, arr) {
  // your code here
  obj[key] = arr;
};

addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty);

// ----------------------------------------------
// 42
// Write a function called "getNthElement".
// Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array. Notes:* If the array has a length of 0, it should return 'undefined'.
// var output = getNthElement([1, 3, 5], 1);
// console.log(output); // --> 3

var output = getNthElement([1, 3, 5], 1);

function getNthElement(array, n) {
  // your code here
  for (var i = 0; i < array.length; i++) {
    if (i == n) {
      return array[i];
    }
  }
};

console.log(output);

// ----------------------------------------------
// 41
// Write a function called "getFirstElement".
// Given an array, "getFirstElement" returns the first element of the given array. Notes:* If the given array has a length of 0, it should return undefined.
// var output = getFirstElement([1, 2, 3, 4, 5]);
// console.log(output); // --> 1

function getFirstElement(array) {
  // your code here
  for (var i = 0; i < array.length; i++) {
    if (i == 0) {
      return array[i];
    }
  }
};

// ----------------------------------------------
// 40
// var output = getFirstElement([1, 2, 3, 4, 5]);
// console.log(output);
// Write a function called "getLastElement".
// Given an array, "getLastElement" returns the last element of the given array. Notes:* If the given array has a length of 0, it should return 'undefined'.
// var output = getLastElement([1, 2, 3, 4]);
// console.log(output); // --> 4

function getLastElement(array) {
  // your code here
  for (var i = 0; i < array.length; i++) {
    if (i == array.length-1) {
      return array[i];
    }
  }
};

var output = getLastElement([1, 2, 3, 4]);
console.log(output);