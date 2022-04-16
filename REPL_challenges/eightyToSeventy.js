// Write a function called "isOldEnoughToDrink".

// Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
//var output = isOldEnoughToDrink(22);
//console.log(output); // --> true
// 80

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
// Write a function called "isOldEnoughToDrive".

// Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.

// Notes:* The legal driving age in the United States is 16.

// var output = isOldEnoughToDrive(22); console.log(output); // --> true
// 79

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
// Write a function called "isOldEnoughToVote".

// Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.

// Notes:* The legal voting age in the United States is 18.

// var output = isOldEnoughToVote(22);
// console.log(output); // --> true
// 78

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

  // Write a function called "isOldEnoughToDrinkAndDrive".

  // Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.
  
  // Notes:* The legal drinking age in the United States is 21.* It is always illegal to drink and drive in the United States.
  
  // var output = isOldEnoughToDrinkAndDrive(22);
  // console.log(output); // --> false
  // 77

function isOldEnoughToDrinkAndDrive(age) {
    // your code here
    if (age) {
      return false
    }
};
  
let age = 22;
  
console.log(isOldEnoughToDrinkAndDrive(age));

// ** Challenges 76-74 did not require functions. They cover removing, adding & getting properties from an object

// Write a function called "checkAge".

// Given a person's name and age, "checkAge" returns one of two messages:

// "Go home, {insert_name_here}!", if they are younger than 21."Welcome, {insert_name_here}!", if they are 21 or older.

// Naturally, replace "{insert_name_here}" with the given name. :)

// var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'
// 73

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

// Write a function called "getFullName".

// Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.

// var output = getFullName('Joe', 'Smith');
// console.log(output); // --> 'Joe Smith'
// 72

function getFullName(firstName, lastName) {
  // your code here
  return firstName + ' ' + lastName;
}

let firstName = 'Joe';
let lastName = 'Smith';

console.log(getFullName(firstName, lastName));

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