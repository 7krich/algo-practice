// ----------------------------------------------
// 69
// Write a function called "getLengthOfTwoWords".

// Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

// var output = getLengthOfTwoWords('some', 'words');
// console.log(output); // --> 9

let w1 = 'big'
let w2 = 'enormous'

function getLengthOfTwoWords() {
  // your code here
  let newWord = w1 + w2;
  for (var i = 0; i < newWord.length; i++) {
    return newWord.length;
  }
};

console.log(getLengthOfTwoWords());

// ----------------------------------------------
// 68
// Write a function called "isGreaterThanTen".
// Given a number, "isGreaterThanTen" returns whether it is greater than 10.
// var output = isGreaterThanTen(11);
// console.log(output); // --> true

let number = 11

function isGreaterThanTen(num) {
  // your code here
  if (num > 10) {
    return true;
  }
  return false;
};

// ----------------------------------------------
// 67
// console.log(isGreaterThanTen(number));
// Write a function called "isLessThan30".
// Given a number, "isLessThan30" returns whether the given number is less than 30.
// var output = isLessThan30(9);
// console.log(output); // --> true

function isLessThan30(num) {
    // your code here
    if (num < 30) {
      return true;
    }
    return false;
  }
  
  console.log(isLessThan30(9));