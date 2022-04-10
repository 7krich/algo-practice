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

