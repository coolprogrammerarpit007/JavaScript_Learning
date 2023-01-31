"use strict"; // Strict mode activated

// This line of code should be at start of the file
// Strict mode helps developers to write more secure code which avoids accidental errors.

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicence = true;
// }

// if (hasDriversLicence) {
//   console.log(`I can drive!!`);
// }

// const interface = "Audio";
// const private = 534;
// const if = 789;

// Functions in JavaScript

function logger() {
  console.log(`My name is Arpit`);
}
// logger(); // This process is called calling,invoking or running the function
// logger();
// logger();
// logger();
// logger();
// logger();

// function foodProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice made with of ${apples} apples and ${oranges} oranges.`;

//   return juice;
// }

// console.log(foodProcessor(3, 5));

// const appleOrangeJuiice = foodProcessor(2, 4);
// console.log(appleOrangeJuiice);

// Function Declarations vs Function Expressions

// Function declaration
// const age1 = calcAge1(1999);
// console.log("age1: ", age1);
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

// Function Expresssion

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1999);
// console.log(age2);

// Function Expression is also called the Anonmous Function

// The main diff b/w function declaration and expression is that we can called the  function declaration before even it define because of what is called hoisting

// But same is not true in case of the function expression

// Arrow functions

const calcAge3 = (birthYear) => 2037 - birthYear;
// console.log(calcAge3(1999));

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirementYear = 65 - age;
  return `${firstName} retires in ${retirementYear}`;
};

// console.log(yearsUntillRetirement(1999, "Arpit"));

// Arrow function does not get this keyword

// Functions Calling otherr functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function foodProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  // console.log(applePieces, orangePieces);
  const juice = `Juice made with of ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;

  return juice;
}

const appleOrangeJuiice = foodProcessor(3, 5);
// console.log(appleOrangeJuiice);

// Coding Challenge #1:-

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const checkWinner = (avgScore1, avgScore2) => {
  let winner;
  if (avgScore1 > 2 * avgScore2) {
    winner = `Dolphins win(${avgScore1} vs ${avgScore2})`;
  } else if (avgScore2 > 2 * avgScore1) {
    winner = `Koalas win(${avgScore2} vs ${avgScore1})`;
  } else {
    winner = "No One Wins";
  }
  return winner;
};

const calcAvg = (score1, score2, score3, score4, score5, score6) => {
  const dolphinsAvgScore = (score1 + score2 + score3) / 3;
  const koalasAvgScore = (score4 + score5 + score6) / 3;
  const winner = checkWinner(dolphinsAvgScore, koalasAvgScore);
  return winner;
};

// console.log(calcAvg(44, 23, 71, 65, 54, 49));
// console.log(calcAvg(85, 54, 41, 23, 34, 27));

// Arrays in JavaScript
// Only Primitives values are immutable not the Objects in JavaScript

// Method 2:- to construcct array

const years = new Array(1999, 2000, 2001, 2002, 2003, 2007, 2006, 2018);
// console.log(years[0]);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
// console.log("Age: ", calcAge2(years[1]));

// Basic Array Methods

const friends = ["Arpit", "Rajesh", "Avinash", "Priyanshu"];

const newLen = friends.push("Pranshu"); // pushes element to last to the array.
// console.log(friends);
// console.log(newLen);

// push() returns the length of the array
// unshift() pushes element at first position of the array. it also returns the length of the array

// Remove elements from the array

// pop() removes the last element from the arra

const removedFriend = friends.pop();
// console.log(friends);
// console.log(removedFriend);

// shift() removes the first element from the array and it also removed the removed element from the friends array.

// console.log(friends.indexOf("Rajesh"));

// indexOf() returns the index of the element where it found first time otherwise returns -1

// includes() returns true or false if element is in array or not on the basis of strict equality.

// Coding Challenge#2:-
// Test data: 125, 555 and 44

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills);
// console.log(tips);
// console.log(total);

// Objects in JavaScript
// In Objects order doesn't matter.

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.age} years old ${this.job}. ${
      this.hasDriversLicence
        ? "and he has a driving licence."
        : `and he don't have a driving licence.`
    }`;
  },
};

// Object Methods
// This Keyword is equal to the Object calling the Method.
jonas.calcAge();
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.getSummary());

// Here we need to calculate age only once then just have to retrieve the age value.
// console.log(jonas["calcAge"]());

// Challenge

const aboutJonas = `${jonas.firstName} has ${jonas.friends.length} friends and his best friend name is ${jonas.friends[0]}.`;
// console.log(aboutJonas);

// Coding Challenge #3:-
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

const mark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());
const str = `${
  mark.BMI > john.BMI
    ? `Mark's BMI(${mark.BMI}) is higher than john's BMI(${john.BMI})`
    : `John's BMI(${john.BMI}) is higher than Mark's BMI(${mark.BMI})`
}`;
console.log(str);
