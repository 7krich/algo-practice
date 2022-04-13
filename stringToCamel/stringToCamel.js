// Coding Challenge:
// Write a solution that takes in a string and converts it to camelCase.. The string will be a sentence with only letters and spaces.
// Hey there buddy => heyThereBuddy
// My name is Jordan => myNameIsJordan

function strToCamel(str) {
    // split the original string on each space given
    const splittedStr = str.split(' ');

    // create an empty string for the new string to be added
    newStr = "";

    // loop/iterate through the new string created after the split on line 8
    for (var i = 0; i < splittedStr.length; i++) {
        
        //check what current indexes are
        console.log(splittedStr[i]);
 
        // if we are at the first index of the string
        if (i === 0) {
            // make this letter lowercase since camelcase always starts out lower case
            newStr += splittedStr[i].toLowerCase();
        } else {
            // else call & add the capitalizeFirstLetter function to add the remaining data to the string
            newStr += capitalizeFirstLetter(splittedStr[i]);
        }
    };
    
    // return the new string
    return newStr;
};

// capitalize first letter function
function capitalizeFirstLetter(str) {

    // convert character #0 to an uppercase & slice (i.e. return the selected elements as a new array)
    return str.charAt(0).toUpperCase() + str.slice(1);

}

let oldStr = "Hey there buddy";

console.log(strToCamel(oldStr));