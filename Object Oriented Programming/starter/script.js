'use strict';
console.log(`***************************`);

// Classes and Instances
// The 4 fundamental OOP Principles
// Abstraction,Encapsulation,Inheritence andd Polymorphism
// OOPS IN JAVASCRIPT

// 3 ways of Implementing Prototypal Inheritence in JavaScript

// 1. Constructor Methods
// 2. ES6 Classes
// 3. Object Create Method

// Constructor Method:-
// Technique to create objects from a function
// This is how built in methods like Arrays,maps or ets are Implemented

// ES6 Method:-
// Modern alternative to the constructor function syntax
// Synthetic sugar:- behind the scenes ES6 classes worked exactly like the constructor functions
//ES6 Classes do not behave like the classes in the
// classical oop

// Object.create():- The easiest and most straightforward way of linking an object to a prototype object

// Important:- ALL 4 principals of oops are still valid here

// constructor function and the new operator

// creating the Person Prototype using the constructor function

const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never write like this
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

const person1 = new Person(`Arpit`, 1999);
const matilda = new Person(`Matilda`, 1984);
const jack = new Person(`Jack`, 1988);
// console.log(person1, matilda, jack);
// console.log(person1 instanceof Person);
// person1.calcAge();

// This new keyword does 4 things behind the scenes

// 1.new {} is created
// 2. constructor function is called and this keyword points to the newly created object.
// 3. {} linked to the prototype
// 4. function automatically return {}

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

// person1.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(person1.__proto__);
// so the prototype of the person1 object is the prototype of the constructor function
// console.log(person1.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(person1));

// Prototyype Inheritence on built-in objects
// prototype chain
// Top of the scope chain
// console.log(person1.__proto__);
// console.log(person1.__proto__.__proto__);
// console.log(person1.__proto__.__proto__.__proto__);
Person.prototype.species = `Homo Sapiens`;
// console.log(person1.species, matilda.species);
// console.log(Person.prototype.constructor);
const arr = [3, 6, 9, 8, 7, 4, 5, 6, 1, 2, 3, 3, 3, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());
// const h1 = document.querySelector(`h1`);
// console.log(h1.__proto__);

// coding challenge #1:-

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(
//     `Speed Increased by 10, Speed is now accelerated to: ${this.speed}`
//   );
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(
//     `Speed decreaed by 5, Speed is now deaccelerated to: ${this.speed}`
//   );
// };

// const BMW = new Car(`BMW`, 120);
// const Mercedes = new Car(`Mercedes`, 95);
// BMW.accelerate();
// BMW.brake();
// Mercedes.accelerate();
// Mercedes.brake();
