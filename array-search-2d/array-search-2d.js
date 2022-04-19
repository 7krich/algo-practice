// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

// Sample Array
var twoD = [
    ['X', 'O'], 
    ['X', 'O', 'X', 'O'], 
    ['O', 'O'], 
    ['X', 'X', 'X']
];

var arraySearch2D = function(arr) {

    // Create count variable
    let numberOfXs = 0

    // loop over the outer array
    for (var i = 0; i < arr.length; i++) {
        // loop over the sub array at each arr[i] position to iterate over each string contained within the sub-array
        for (var j = 0; j < arr[i].length; j++) {
            // if the inner array, within the outer array[i] equals 'X'
            if (arr[i][j] === 'X') {
                // add to the number of X count
                numberOfXs++;
            }
        }
    }
    // return the count
    return numberOfXs;
};

console.log(arraySearch2D(twoD));