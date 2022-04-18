// 80
// Write a function called "isOldEnoughToDrink".
// Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
//var output = isOldEnoughToDrink(22);
//console.log(output); // --> true

function isOldEnoughToDrink(age) {
    // your code here	
    if (age > 20) {
      return true;
    } else {
      return false;
    }
  };
  
  let age = 22
  
  console.log(isOldEnoughToDrink(age))

// ----------------------------------------------
// 79
// Write a function called "isOldEnoughToDrive".
// Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.
// Notes:* The legal driving age in the United States is 16.
// var output = isOldEnoughToDrive(22); console.log(output); // --> true

function isOldEnoughToDrive(age) {
    if (age > 15) {
        return true;
    } else {
        return false;
    }
};

let age = 22

console.log(isOldEnoughToDrive(age))

// ----------------------------------------------
// 78
// Write a function called "isOldEnoughToVote".
// Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.
// Notes:* The legal voting age in the United States is 18.
// var output = isOldEnoughToVote(22);
// console.log(output); // --> true

function isOldEnoughToVote(age) {
    // your code here
    if (age > 17) {
      return true;
    } else {
      return false
    }
};
  
let age = 22;
  
console.log(isOldEnoughToVote(age));

// ----------------------------------------------
// 77
// Write a function called "isOldEnoughToDrinkAndDrive".
// Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.
// Notes:* The legal drinking age in the United States is 21.* It is always illegal to drink and drive in the United States.
// var output = isOldEnoughToDrinkAndDrive(22);
// console.log(output); // --> false

function isOldEnoughToDrinkAndDrive(age) {
    // your code here
    if (age) {
      return false
    }
};
  
let age = 22;
  
console.log(isOldEnoughToDrinkAndDrive(age));

// ----------------------------------------------
// 76
// Write a function called "getProperty".
// Given an object and a key, "getProperty" returns the value of the property at the given key. Notes:* If there is no property at the given key, it should return undefined.
// var obj = {
//   'name': 'Homer'
// };
// var output = getProperty(obj, 'name');
// console.log(output); // --> 'Homer'

function getProperty(obj, key) {
  // your code here
return obj[key];
}

var obj = {
  'name': 'Homer'
};

console.log(getProperty(obj, 'name'));

// ----------------------------------------------
// 75
// Write a function called "addProperty".
// Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.
// var myObj = {};
// addProperty(myObj, 'myProperty');
// console.log(myObj.myProperty); // --> true

let obj = {};

function addProperty(obj) {
  // your code here
  if (obj) {
    return obj.myProperty = "true";
    }
}

console.log(addProperty(obj));

// ----------------------------------------------
// 74
// Write a function called "removeProperty".
// Given an object and a key, "removeProperty" removes the given key from the given object.
// var obj = {
//   name: 'Sam',
//   age: 20
// }
// removeProperty(obj, 'name');
// console.log(obj.name); // --> undefined

var obj = {
  name: 'Sam',
  age: 20
}

function removeProperty(obj, key) {
  // your code here
  delete obj.name;
}

console.log(removeProperty(obj.name));

// ----------------------------------------------
// 73
// Write a function called "checkAge".
// Given a person's name and age, "checkAge" returns one of two messages:
// "Go home, {insert_name_here}!", if they are younger than 21."Welcome, {insert_name_here}!", if they are 21 or older.
// Naturally, replace "{insert_name_here}" with the given name. :)
// var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'

function checkAge() {
  // your code here
  if (person.age > 20) {
    return `Welcome, ${person.name}!`
  } else {
    return `Go home, ${person.name}`
  }
}

let person = {
  name : 'Adrian',
  age : 22
}

console.log(checkAge(person));

// ----------------------------------------------
// 72
// Write a function called "getFullName".
// Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.
// var output = getFullName('Joe', 'Smith');
// console.log(output); // --> 'Joe Smith'

function getFullName(firstName, lastName) {
  // your code here
  return firstName + ' ' + lastName;
}

let firstName = 'Joe';
let lastName = 'Smith';

console.log(getFullName(firstName, lastName));

// ----------------------------------------------
// 71
// Write a function called "getLengthOfWord".
// Given a word, "getLengthOfWord" returns the length of the given word.
// var output = getLengthOfWord('some');
// console.log(output); // --> 4

function getLengthOfWord(word) {
  // your code here

  let wordLength = ''
  
  for (var i = 0; i < word.length; i++) {
    return wordLength += word.length
  }
};

let word = 'some';

console.log(getLengthOfWord(word));