const repeatString = function(string, num) {
    let result = ""
 
    for (let i = 0; i < num; i++) {
        result += string
    }
    if (num < 0) {
        result = "ERROR"
    }

    return result 
}



/* define function parameters
   create empty string result = "" 
   for loop on string argument to concatenate on to result
   make condition i < num to repeat according to num
   i++
   add if statemet for negative num
*/ 

// Do not edit below this line
module.exports = repeatString;
