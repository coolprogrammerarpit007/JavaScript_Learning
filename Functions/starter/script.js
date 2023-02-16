'use strict';

// A CLOSER LOOK AT FUNCTIONS

// Default Parameters

const bookings = [];
const createBooking = (flightNum, numPassengers = 78, price = 199) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking(`LH123`, 155);
// createBooking(`LH8453`, 323);
// createBooking(`LH8453`, undefined, 255);

// How Passing Arguments Works: Value vs Reference

const flight = `LH123`;
const jonas = {
  name: 'Jonas Shwatmedmann',
  passport: 2476589654,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = `LH999`;
  passenger.name = `Mr. ` + passenger.name;

  if (passenger.passport === 2476589654) {
    alert(`Check In`);
  } else {
    alert(`Wrong Details!!`);
  }
};

// checkIn(flight, jonas);
// console.log(flight); // print LH123
// console.log(jonas); // Passenger name will changes

// When primitives are passed into function, copy of primitive is passed where as in case of object reference value is passed.

const newPassport = person => {
  person.passport = Math.floor(Math.random() * 1000000000);
};

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(jonas);

// Pass by value by Pass by Reference -> In JS there i only pass by value not reference

console.log('First class and higher order functions');

// First Class and Higher Order Functions

// JavaScript Treats function as first-class citizens
// It means functions are simple values
// function are just another type of objects

// Higher Order Functions

// A function that receives another function as an argument and that returns a new function, or both

// This is only possible because of higher-order functions

// First-class functions are just values not actual practice where as higher-order functions are actual practice and posible only because of first class functions

//  Functions accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(` `);
};

// Higher Order functions
const transformer = (str, fn) => {
  console.log(`original String is: ${str}`);
  console.log(`Transformed by: ${fn.name}`);
  return fn(str);
};

// console.log(transformer(`JavaScript is best`, upperFirstWord));
// console.log(transformer(`JavaScript is best`, oneWord));

// we are calling the function here and passed the callback functions,becz we are not the one calling the functions instead  telling JS to call the function later

// Just uses callback everywhere

// Callback functions are used so much, because it creates a level of abstraction for code-Implementation

const high5 = () => {
  console.log(`Hellloooooo!!!!! There.......`);
};

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// Function returning Functions

// const greet = greeting => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet(`Hey`);
// greeterHey(`Arpit`);
// greeterHey(`Steven`);
// greeterHey(`Jonas`);

const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

// we can call this function directly here

// const greetHey = greet('Vamos');
// greetHey(`Rafael`);
// greet('Idemo')(`Novak`);

// The Call and Apply Method

const luftanza = {
  airline: `Luftanza`,
  itaCode: `LH`,
  bookings: [],
  booking(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a flight at ${this.airline} Airlines, whose code: ${this.itaCode} and flight No: ${flightNum}`
    );
    this.bookings.push({
      flight: this.itaCode + flightNum,
      name: passengerName,
    });
  },
};

// luftanza.booking(239, 'Arpit');
// luftanza.booking(365, 'Jonas');
// console.log(luftanza.bookings);

const euroWings = {
  airline: `EuroWings`,
  itaCode: `EW`,
  bookings: [],
};

const book = luftanza.booking;
// book('LH', 'Serena Williams'); // don' t work

// it will throw an error as book will be a regualar function,where this points to undefined so we have to explicitly tell it point to here leftanza airlines and for this there are 3 methods:- call,apply and bind

// book.call(euroWings, 164, `Serena Willams`);
// console.log(euroWings);
// book.call(luftanza, 435, `John Smilga`);
// console.log(luftanza);

const swiss = {
  airline: `SwissWings`,
  itaCode: `SW`,
  bookings: [],
};

// book.call(swiss, 789, 'Roger Federer');
// console.log(swiss);

// There is a similar method to call method which is called the apply method

/* ****************************************** */

// the diff b/w apply and call method is that there wil not be arguments after this keyword, instead an array of arguments

// Apply method

const flightData = [583, `George Cooper`];
// book.apply(swiss, flightData);
// book.call(euroWings, ...flightData);
// console.log(swiss);
// console.log(euroWings);

// bind Method

// bind also allow us to manually set the this keyword , what difference is that it returns a function which is set to ponint to object

const bookEw = book.bind(euroWings);
const bookLh = book.bind(luftanza);
const bookSw = book.bind(swiss);
const bookEw785 = book.bind(swiss, 785);
// bookEw('153', 'Virat Kohli');
// bookEw785('Rohit Sharma');
// bookEw785('Shikhar Dhawan');
// console.log(swiss);
// console.log(euroWings);

// With event listeners

luftanza.planes = 300;
// console.log(luftanza);

luftanza.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// luftanza.buyPlanes();

const buyBtn = document.querySelector(`.buy`);
buyBtn.addEventListener('click', luftanza.buyPlanes.bind(luftanza));

// Partial Application

// const addTax = (rate, value) => value + (value * rate) / 100;
// console.log(addTax(200, 10));

// const addVAT = addTax.bind(null, 28);
// console.log(addVAT(500));

// Challenge
const addTax = rate => {
  return value => {
    console.log((rate * value) / 100 + value);
  };
};

// addTax(23)(23);

// Coding Challenge #1:-

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

// Display Result Method

poll.displayResult = function (resultType = 'array') {
  // console.log(this);
  // console.log(this.answers.length);
  if (resultType === 'array') {
    this.answers.forEach((answer, index) =>
      console.log(`Answer${index}: ${answer}`)
    );
  } else {
    console.log(
      `"Poll results are: ${this.answers[0]},${this.answers[1]},${this.answers[2]},${this.answers[3]}`
    );
  }
};

// Register New Answer Method

poll.registerNewAnswer = function () {
  const answer = Number(
    prompt(
      this.question +
        `\n${this.options[0]} \n${this.options[1]} \n${this.options[2]} \n${this.options[3]} \n(Write option number)`
    )
  );
  if (
    (typeof answer === `number` && answer === 0) ||
    answer === 1 ||
    answer === 2 ||
    answer === 3
  ) {
    this.answers[answer] += 1;
    this.displayResult(`string`);
  } else {
    alert(`You selected an wrong option!!`);
  }
};

const pollBtn = document.querySelector(`.poll`);
pollBtn.addEventListener(`click`, poll.registerNewAnswer.bind(poll));
// console.log(poll);

// Bonus
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]

// var answers = [5, 2, 3, 5, 9, 8];
// poll.displayResult.call(this);

// OR YOU CAN DO THIS

// poll.displayResult.call({ answer: [5, 2, 3] });

// Immediately Invoked Function Expressions(IIFE)

// A function which dissapears right after it calls once is called IIFE function

// const runOnce = function () {
//   console.log(`This will only run once!!`);
// };

// runOnce(); // but we can call this function as many times and run it so this will not fullfill our purpose

// but we can trice JS by creting a IIFE like this

(function () {
  console.log(`This is the first and only time where it will run!!`);
})(); // this is called a IIFE

(() => console.log(`This will also never run gain!!`))();

/* ********************************* */

// Closures in JavaScript

/* ********************************** */

// one thing to remember that, closures doesn't created explicitily,it is constructed automatically , we just have to recognize that situation when clousure is created.

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`Passengers: ${passengerCount}`);
  };
};

const booking = secureBooking();

// booking();
// booking();
// booking();

// we can say that closures makes a function remember all the variables that existed at function's birth place by the time it was created

// Closure Secret:- Any function has acess to the variable environment of the EC in which the funtion was creted even after that EC is gone

// A closure has priority over the scope-chain

// A closure is like a backpack that a function carries everywhere, this backpack has all the variables that were present in the environment where the function was created

// console.dir(booking); we can check closure using this

// more closure functions

let f;

// const g = function () {
//   let a = 23;
//   f = function () {
//     a = a * 2;
//     console.log(a);
//   };
// };

// g();
// f(); // prints 46
// f(); // prints 92

const g = function () {
  let a = 23;
  f = function () {
    console.log(a * 2);
  };
};

// g();
// f();

// Re assigning f function
const h = function () {
  const b = 777;
  f = function () {
    // a = a * 2;
    console.log(b * 2);
  };
};

// h();
// f();

// Another Example

const boardPassengers = function (numPassengers, wait) {
  const perGroup = numPassengers / 3;
  setTimeout(function () {
    console.log(`We are boarding all ${numPassengers} Passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// boardPassengers(180, 3);

// closures has priority over scope chain

// Coding Challenge #2:-

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'green';
  document.querySelector(`body`).addEventListener('click', e => {
    header.style.color = 'blue';
  });
})();
