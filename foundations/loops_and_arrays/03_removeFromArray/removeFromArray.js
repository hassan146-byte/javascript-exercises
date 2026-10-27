const removeFromArray = function(arr, ...manyMoreArgs) {
    return arr.filter(num => !manyMoreArgs.includes(num)); 
};

removeFromArray 

/*
function(arr, remove) 
for loop 
if statement

return arr
*/

// Do not edit below this line
module.exports = removeFromArray;
