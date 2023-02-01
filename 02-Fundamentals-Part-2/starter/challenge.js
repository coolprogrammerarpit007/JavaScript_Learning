"use strict";

// Assignment Problems

// Assignment #1:

// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
  const populationDescription = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
  return populationDescription;
}

// const country1 = describeCountry("India", 1200, "New Delhi");
// const country2 = describeCountry("China", 1400, "Bejjing");
// const country3 = describeCountry("United States", 330, "Newyork City");

// console.log(country1);
// console.log(country2);
// console.log(country3);

// Function declarations vs Epressions

// Assignment #2:-

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

// Function Declarations

function percentageOfWorld1(country, population) {
  // Poulation in millions
  const worldPopulation = 7900;

  const percentageOfWorld = (population / worldPopulation) * 100;
  const populationDescription = `${country} has ${population} million pepole, so it's about ${Math.floor(
    percentageOfWorld
  )} % of the world population.`;
  return populationDescription;
}

// const country1 = percentageOfWorld1("India", 1200);
// const country2 = percentageOfWorld1("China", 1400);
// const country3 = percentageOfWorld1("USA", 330);

// console.log(country1, country2, country3);

// Function Expressions

const percentageOfWorld2 = function (country, population) {
  const worldPopulation = 7900;
  const percentageOfWorld = (population / worldPopulation) * 100;
  const populationDescription = `${country} has ${population} million pepole, so it's about ${Math.floor(
    percentageOfWorld
  )} % of the world population.`;
  return populationDescription;
};

// const country1 = percentageOfWorld1("India", 1200);
// const country2 = percentageOfWorld1("China", 1400);
// const country3 = percentageOfWorld1("USA", 330);

// console.log(country1, country2, country3);

// Assignment #3:-

// Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

const percentageOfWorld3 = (country, population) => {
  // Population in Millions
  const worldPopulation = 7900;
  const percentageOfWorld = (population / worldPopulation) * 100;

  const popultionDescription = `${country} has ${population} million pepole, which represents ${Math.floor(
    percentageOfWorld
  )} % of world population.`;
  return worldPopulation;
};

// const country1 = percentageOfWorld1("India", 1200);
// const country2 = percentageOfWorld1("China", 1400);
// const country3 = percentageOfWorld1("USA", 330);

// console.log(country1, country2, country3);

// Assignment#4:-
// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

const percentageOfWorldPopulation = (population) => {
  const worldPopulation = 7900;
  const percentageOfWorld = (population / worldPopulation) * 100;
  return percentageOfWorld;
};

const describePopulation = (country, population) => {
  const percentageOfWorld = Math.floor(percentageOfWorldPopulation(population));
  return `${country} has ${population} million pepole, which is about ${percentageOfWorld} % of the world population.`;
};

// const country1 = percentageOfWorld1("India", 1200);
// const country2 = percentageOfWorld1("China", 1400);
// const country3 = percentageOfWorld1("USA", 330);

// console.log(country1, country2, country3);

// Assignment #5:-
// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

// Array of Popuation (in millions)

const populations = [1400, 1200, 330, 220];
// console.log(populations.length);

const percentages = [
  percentageOfWorldPopulation(populations[0]),
  percentageOfWorldPopulation(populations[1]),
  percentageOfWorldPopulation(populations[2]),
  percentageOfWorldPopulation(populations[3]),
];

// console.log(percentages);

// Assignment #6:-

// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'

const neighbours = [
  "Pakistan",
  "Afghanistan",
  "Bangladesh",
  "Myanmar",
  "Nepal",
  "Bhutan",
  "China",
  "Srilanka",
];

neighbours.push("Utopia");
// console.log(neighbours);
neighbours.pop();
// console.log(neighbours);

if (!neighbours.includes("Germany")) {
  // console.log(`Probably not a central European country :D`);
}

const index = neighbours.indexOf("China");
neighbours[index] = "Tibbet";
// console.log(neighbours);

// Assignment 7:-

// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

// const myCountry = {
//   country: "India",
//   capital: "New Delhi",
//   languge: "Hindi",
//   population: 1200,
//   neighbours: [
//     "Pakistan",
//     "Afghanistan",
//     "Bangladesh",
//     "Myanmar",
//     "Nepal",
//     "Bhutan",
//     "China",
//     "Srilanka",
//   ],
// };

// console.log(myCountry);

// Assignment #8:-
// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

// const aboutCountry = `${myCountry.country} has ${myCountry.population} million ${myCountry.languge} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}. `;
// myCountry.population += 2;
// myCountry["population"] -= 2;
// console.log(myCountry);
// console.log(aboutCountry);

// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

const myCountry = {
  country: "India",
  capital: "New Delhi",
  languge: "Hindi",
  population: 1200,
  neighbours: [
    "Pakistan",
    "Afghanistan",
    "Bangladesh",
    "Myanmar",
    "Nepal",
    "Bhutan",
    "China",
    "Srilanka",
  ],
  describeCountry: function () {
    return `${this.country} has ${this.population} million ${this.languge} speaing people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
    return this.isIsland;
  },
};

// console.log(myCountry.describeCountry());
myCountry.checkIsland();
// console.log(myCountry.isIsland);

// Assignment #9:-

// LECTURE: Iteration: The for Loop
// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

// for (let i = 0; i < 50; i++) {
// console.log(`Voter number ${i + 1} is currenly voting`);
// }

// Assignment #10:-
// LECTURE: Looping Arrays, Breaking and Continuing
// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

const populations1 = [1400, 1200, 330, 220];

const percentages2 = [];
for (let i = 0; i < populations1.length; i++) {
  percentages2[i] = percentageOfWorldPopulation(populations1[i]);
}

// console.log(`World Population% Array: ${percentages2}`);

// Assignment #11:-

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway �

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden"],
//   ["Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }

// Assignment #12:-
// Percentage using while loop

// const populations2 = [1400, 1200, 330, 220];
// const percentages3 = [];

// let i = 0;
// while (i < populations2.length) {
//   percentages3.push(percentageOfWorldPopulation(populations2[i]));
//   i++;
// }

// console.log(`New Percentages Array Using While loop: ${percentages3}`);
