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

// ----------------------------------------------
// 66
// Write a function called "equalsTen".
// Given a number, "equalsTen" returns whether or not the given number is 10.
// var output = equalsTen(9);
// console.log(output); // --> false

function equalsTen(num) {
    // your code here
    if (num === 10) {
      return true;
    }
    return false;
  }
  
  console.log(equalsTen(9));

// ----------------------------------------------
// 65
// Write a function called "isLessThan".
// Given 2 numbers, "isLessThan" returns whether num2 is less than num1.
// var output = isLessThan(9, 4);
// console.log(output); // --> true

function isLessThan(num1, num2) {
    // your code here
    if (num2 < num1) {
      return true;
    }
    return false;
  };
  
  console.log(isLessThan(9, 4));

// ----------------------------------------------
// 64
// Write a function called "isGreaterThan".
// Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.
// var output = isGreaterThan(11, 10);
// console.log(output); // --> false

function isGreaterThan(num1, num2) {
    // your code here
    if (num2 > num1) {
      return true
    }
    return false;
  };
  
  console.log(isGreaterThan(11, 10));

// ----------------------------------------------
// 63
// Write a function called "isEqualTo".
// Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.
// var output = isEqualTo(11, 10);
// console.log(output); // --> false

function isEqualTo(num1, num2) {
    // your code here
    if (num1 == num2) {
      return true;
    }
    return false;
  };
  
  console.log(isEqualTo(11, 10));

// ----------------------------------------------
// 62
// Write a function called "isEven".
// Given a number, "isEven" returns whether it is even.
// var output = isEven(11);
// console.log(output); // --> false

function isEven(num) {
    // your code here
    if (num % 2 === 0) {
      return true;
    }
    return false;
  };
  
  console.log(isEven(11));