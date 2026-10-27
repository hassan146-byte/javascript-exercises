const convertToCelsius = function(fah) {
  let celcius = (fah - 32) * 5/9;
  return Math.round(celcius * 10) / 10;  
};

const convertToFahrenheit = function(cel) {
  let fahrenheit = cel * 9/5 + 32;
  return Math.round(fahrenheit * 10) / 10; 
};


/*
To Celsius: x °F ≘ (x − 32) × ⁠5/9 °C

To Fahrenheit: 	x °C ≘ (x × ⁠9/5 + 32) °F
*/

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
