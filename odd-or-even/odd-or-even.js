// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number


function oddOrEven(number) {
    if (number % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}


console.log(oddOrEven(5));
console.log(oddOrEven(10));