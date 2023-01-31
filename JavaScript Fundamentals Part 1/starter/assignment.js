// Contains all the lessons and Assignment Code
// let js = "amazing";

// if (js === "amazing") {
//   alert("JavaScript is Fun!!");
// } else {
//   alert("Not Any More!!");
// }

// name is a reserved keyword so don't use it as a variable name..

// Always use discriptive name for your Variable naame

// ASSIGNMENT 1:-

// Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// let country = "India";
// let continent = "Asia";
// let population = 1400; // Population is in Millions

// Every value is Either Primitive or an Object....

// JavaScript has dynamic typing, as we don't have to declare data type while writing manuall. JavaScript determines it automatically...

// let users = null;
// console.log(users);
// console.log(typeof users); // typeof null gives object this is an error which not get improved because of the legacy reason...

// Assignment 2:-
// Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

// let isIsland = false;
// let language;
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
// console.log(typeof isIsland);

// Assignment 3:- Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

let language;
language = "Hindi";

const country = "India";
let population = 1200; // Population in Millions
const continent = "Asia";

const isIsland = false;
// console.log((isIsland = true)); will throw an error as Assigment to a constant variable...

const now = 2037;
const ageArpit = now - 1999;
const ageSarah = now - 2018;
// console.log(ageArpit);
// console.log(ageSarah);
// console.log(ageArpit * 2, ageArpit / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 === 2*2*2 = 8

// const firstName = "Arpit";
// const lastName = "Mishra";
// console.log(firstName + " " + lastName);

// Assignment Operators
let num = 20;
num += 25; // num = num + 25
num++; // num = num + 1
// console.log(num);

// Comparision Operators
// There are many comparision Operators >,<,>=,<=,==,===,!= and !==

// console.log(ageArpit > ageSarah); // result a boolean Value...

// Assignment 4:-If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'

const halfPopulation = population / 2;
// population++;
const finlandPopulation = 6;
const higherPopulation = finlandPopulation > population;
const averagePopulation = 33; // Population in Millios for a country
// const description =
//   country +
//   " is in " +
//   continent +
//   " and it's " +
//   halfPopulation +
//   " million people speak " +
//   language +
//   ".";

// console.log(averagePopulation > population);
// console.log(halfPopulation);
// console.log(population);
// console.log(higherPopulation);
// console.log(description);

const firstName = "Arpit";
// const birthYear = 1999;
const job = "Programmer";

// const mySelf = `Hi, I am ${firstName}, a ${
// 2037 - birthYear
// } Years Old Progrmmer`;

// console.log(mySelf);

// Multiple lines using Template-Strings

// console.log(`Hello,
// My Name is:
// Arpit Mishra and
// I am 23 Years Old!!`);

// Assigment 5:-
// Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax

const description = `${country} is in ${continent}, and it's ${halfPopulation} million pepole speak ${language}.`;

// console.log(description);

// Conditional Statementss

// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(`Sarah can have a driving licence now!!`);
// } else {
//   console.log(`Sorry, Sarah try after ${18 - age} years later!!`);
// }

// const birthYear = 2002;
// let centuary;

// if (birthYear <= 2000) {
//   centuary = 20;
// } else {
//   centuary = 21;
// }

// console.log(`Person was born in ${centuary}th century!!`);

// Assignment 6:-  If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

let populationDetails;

if (population > averagePopulation) {
  populationDetails = `${country}'s Population is above average.`;
} else {
  populationDetails = `${country}'s Population is ${
    averagePopulation - population
  } milltion below average.`;
}

// console.log(populationDetails);

// Type Conversion:- Explicit Conversion/ Manual Conversion

const inputYear = "1999";
// console.log(Number(inputYear) + 18);
// console.log(String(78));

// Type Coercion:- Automatic/Implicit Conversion by JavaScript itself..

// console.log("I AM " + 23 + " Years Old!!");
// console.log("23" + "10" + 3); // '23103' will be o/p

// Assignment 7:- Type-Converion VS Type-Coercion

// Predict the result without Executing Them...again

// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right

// console.log("9" - "5"); // 4
// console.log("19" - "13" + "17"); // 617
// console.log("19" - "13" + 17); // 23
// console.log("23" < 57); // true
// console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143 will be o/p

// Truthy vs Falsey values

// 5 FALSEY values:- 0,'',undefined,null,Nan these values are not initially false but eventually converted into false value when attempted to convert into a boolean value.

// Everything Except these falsey values will be a truthy value

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean("arpit"));
// console.log(Boolean({}));
// console.log(Boolean(NaN));

// In case of booleans there will always implicit conversion not explicit

// const money = 5000;
// if (money) {
//   console.log(`Don't Spend it all`);
// } else {
//   console.log(`You Should get a Job!!`);
// }

// let height;

// if (height) {
//   console.log(`Yay!! Height is defined`);
// } else {
//   console.log("Height is Undefined!!");
// }

// const age = 18;

// if (age === 18) {
//   console.log(`You are an Adult Now..`);
// }

// === stands for strict equality as it don't perform type-coercion. whereas == stands for loose equality as it performs loose equality.

// Prompt() in JS

// const age = Number(prompt("How old are you?"));
// console.log("Age: ", age);

// if (age === 23) {
//   console.log(`Cool, You are in your Prime now!!`);
// } else if (age === 30) {
//   console.log(`You are more than in your Prime now!!`);
// } else {
//   console.log(`Good!! Nice to know you.`);
// }

// !== and != operator which checks if a value is not equal to another!!

// Assignment 8:-
// Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// const numNeighbours = Number(
// prompt("How many neighbour countries does your Country have?")
// );

// if (numNeighbours === 1) {
//   // console.log(`Only ${numNeighbours} Neighbour Country!`);
// } else if (numNeighbours > 1) {
//   // console.log(
//   //   `More than 1 Neighbour like for my country has ${numNeighbours} total Neighbours!!`
//   // );
// } else {
//   // console.log(`No Borders`);
// }

// Not Operator has Precedence over && and || operator

// Logical Operators

const hasDriversLicence = true;
const hasGoodVision = true;

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (shouldDrive) {
//   console.log(`You can drive Sarah!!`);
// } else {
//   console.log(`Someone else Should drive!!`);
// }

// console.log(Boolean(""));

// const isTired = false;
// console.log(hasDriversLicence || hasGoodVision || isTired);

// const shouldDrive = hasDriversLicence && hasGoodVision && !isTired;

// if (shouldDrive) {
// console.log(`You can drive Sarah!!`);
// } else {
// console.log(`Someone else Should drive!!`);
// }

// Assignment 9:-
// Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)

// if (population < 50 && language === "english" && !isIsland) {
//   console.log(`You Should live in ${country}`);
// } else {
//   console.log(`${country} does not meet your criteria`);
// }

// Switch Statements

// const day = prompt("Enter day: ").toLowerCase();

// switch (day) {
//   case "monday":
//     console.log("I plan my code structure!");
//     break;

//   case "tuesday":
//     console.log("Going to coding Meetup...");
//     break;

//   case "wednesday":
//     console.log("Prepare theory videos!!");
//     break;

//   case "thursday":
//   case "friday":
//     console.log("Project Building");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Invalid day!!");
// }

// if (day === "monday") {
//   console.log("I plan my code structure!");
// } else if (day === "tuesday") {
//   console.log("Going to coding Meetup...");
// } else if (day === "wednesday") {
//   console.log("Prepare theory videos!!");
// } else if (day === "thursday" || day === "friday") {
//   console.log("Project Building");
// } else if (day === "saturday" || day === "sunday") {
//   console.log(`Enjoy the Weekend!!`);
// } else {
//   console.log("Invalid day");
// }

// Assignment #10:-

// Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

// const languageSpoken = prompt("Enter your native language: ").toLowerCase();

// switch (languageSpoken) {
//   case "chinese":
//   case "mandarin":
//     console.log(`Most number of native Speakers!!`);
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers!!");
//     break;
//   case "english":
//     console.log("3rd place!!");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great Language Too :");
// }

// Statements and Expressions

// A PIECE OF CODE WHICH PRODUCES VALUE OR RESULT IS CALLED AN EXPRESSION

// A bigger piece of code which don't produces any result is called a statement

// Ternary operator and Template literals only takes an expression

// Conditional || Ternary operator

// const age = 23;
// const result = age >= 18 ? "legal to drive" : "Try after some Year...";
// console.log(result);

// Assignment #11;

// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

const countryStatus =
  population > averagePopulation
    ? `${country}'s population is above average.`
    : `${country}'s population is below average.`;
// console.log(countryStatus);

// Backwards Compatiblity in JS:- It means older code wriiten in web will still work in modern day browsers so the web don't breaks ever
