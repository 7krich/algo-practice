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

// ----------------------------------------------
// 61
// Write a function called "isOdd".
// Given a number, "isOdd" returns whether the given number is odd.
// var output = isOdd(9);
// console.log(output); // --> true

function isOdd(num) {
    // your code here
    if (num % 2 === 0) {
      return false;
    }
    return true;
  };
  
  console.log(isOdd(9));

// ----------------------------------------------
// 60
// Write a function called "isSameLength".
// Given two words, "isSameLength" returns whether the given words have the same length.
// var output = isSameLength('words', 'super');
// console.log(output); // --> true

function isSameLength(word1, word2) {
    // your code here
    if (word1.length == word2.length) {
      return true;
    }
    return false;
  };
  
  console.log(isSameLength('words', 'super'));

// ----------------------------------------------
// 59
// Write a function called "areBothOdd".
// Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.
// var output = areBothOdd(1, 3);
// console.log(output); // --> true

function areBothOdd(num1, num2) {
    // your code here
    if (num1 % 2 !== 0 && num2 % 2 !== 0) {
      return true;
    }
    return false;
  };
  
  console.log(areBothOdd(1, 3));

// ----------------------------------------------
// 58
// Write a function called "isEitherEven".
// Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.
// var output = isEitherEven(1, 4);
// console.log(output); // --> true

function isEitherEven(num1, num2) {
    // your code here
    if (num1 % 2 === 0 || num2 % 2 === 0) {
      return true;
    }
    return false;
  };
  
  console.log(isEitherEven(1, 4));

// ----------------------------------------------
// 57
// Write a function called "isOddLength".
// Given a word, "isOddLength" returns whether the length of the given word is odd.
// var output = isOddLength('special');
// console.log(output); // --> true

function isOddLength(word) {
    // your code here
    if (word.length % 2 !== 0) {
      return true;
    }
    return false;
  };
  
  console.log(isOddLength('special'));

// ----------------------------------------------
// 56
// Write a function called "isEvenLength".
// Given a word, "isEvenLength" returns whether the length of the word is even.
// var output = isEvenLength('wow');
// console.log(output); // --> false

function isEvenLength(word) {
    // your code here
    if (word.length % 2 === 0) {
      return true;
    }
    return false;
  };
  
  console.log(isEvenLength('wow'));

// ----------------------------------------------
// 55
// Write a function called "isEvenAndGreaterThanTen".
// Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.
// var output = isEvenAndGreaterThanTen(13);
// console.log(output); // --> false

function isEvenAndGreaterThanTen(num) {
    // your code here
    if (num % 2 === 0 && num > 10) {
      return true;
    }
    return false;
  };
  
  console.log(isEvenAndGreaterThanTen(13));

// ----------------------------------------------
// 54
// Write a function called "average".
// Given two numbers, "average" returns their average.
// var output = average(4, 6);
// console.log(output); // --> 5

function average(num1, num2) {
    // your code here
    newNum = num1 + num2;
    finalNum = newNum / 2;
    return finalNum;
  };
  
  console.log(average(4, 6));

// ----------------------------------------------
// 53
// Write a function called "computeAreaOfATriangle".
// Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.
// var output = computeAreaOfATriangle(4, 6);
// console.log(output); // --> 12

function computeAreaOfATriangle(base, height) {
    // your code here
    sqArea = base * height;
    return triArea = sqArea / 2
  };
  
  console.log(computeAreaOfATriangle(4, 6));

// ----------------------------------------------
// 52
// Write a function called "cube".
// Given a number, "cube" returns the cube of that number.
// var output = cube(3);
// console.log(output); // --> 27

function cube(num) {
  // your code here
  cubed = num * num * num;
  return cubed;
};

console.log(cube(3));

// ----------------------------------------------
// 51
// Write a function called "square".
// Given a number, "square" should return the square of the given number.
// var output = square(5);
// console.log(output); // --> 25

function square(num) {
  // your code here
  squared = num * num;
  return squared;
};

console.log(square(5));

// ----------------------------------------------
// 50
// Write a function called "computeAverageLengthOfWords".
// Given two words, "computeAverageLengthOfWords" returns the average of their lengths.
// var output = computeAverageLengthOfWords('code', 'programs');
// console.log(output); // --> 6

function computeAverageLengthOfWords(word1, word2) {
  // your code here
  charLength = word1.length + word2.length;
  return avg = charLength / 2;
};

console.log(computeAverageLengthOfWords('code', 'programs'));