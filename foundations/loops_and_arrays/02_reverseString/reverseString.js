const reverseString = function(phrase) {
    arr = phrase.split("");
    arr.reverse();
    newString = arr.join("")
    return newString;
};


/* 
Turn input string into Array using split
use reverse() to reverse the array 
use join() to convert back into a string
return new string
*/

// Do not edit below this line
module.exports = reverseString;
