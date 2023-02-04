// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Debugging with console and breakpoints

// const tempConverter = function () {
//   const measurment = {
//     type: "temperature",
//     unit: "cels",
//     value: prompt(`Degress in Celcius: `),
//   };
//   debugger;

//   const kelvin = Number(measurment.value) + 273.15;
//   return kelvin;
// };

// console.log(tempConverter());

// Coding Challenge:-1

// Test data :- Temperature Arrays: [17,21,23];
// Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

const temperature = [17, 21, 23];

const printForecast = function (arr) {
  let sum = ``;
  arr.forEach((temp, i) => {
    let str = ` ... ${temp} degree Celcius in ${i + 1} days`;
    sum = sum + str;
  });
  sum = sum + ` ...`;
  return sum;
};

const tempStr = printForecast(temperature);
console.log(tempStr);
