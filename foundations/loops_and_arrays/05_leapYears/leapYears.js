const leapYears = function(year) {
if (Number.isInteger(year/4) && !Number.isInteger(year/100) || Number.isInteger(year/400)) {
    return true; 
} else {
    return false;
}
};


/*
function(year)
if (Number.integer(year/4) && !Number.integer(year/100) || Number.integer(year/400)    
*/

// Do not edit below this line
module.exports = leapYears;
