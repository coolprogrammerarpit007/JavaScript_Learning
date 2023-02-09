'use strict';

// How JavaScript Works Behind the Scenes?

// JavaScript is a High-level Prototype based Object
// Oriented Multi-Paradigm Interpretted or Just-in-time Compiled dynaamic Single-threaded Garbage-Collected Programming language with first-class functions and a non-blocking event loop concurrency model.

// JavaScript Engine and the Runtime

// JS Engine is a program that executes JavaScript code

// Example: V8 Engine which powers google chrome as well as nodejs

// Every other browser has their own different JavaScript Engine

// Every JavaScript engine contains a call-stack and a heap

// A call-stack is where our code is executed using Execution-Context

// Heap is an unstructured memory-pool which stores all the objects that our application needs

// Compilation:- Entire code is converted into the mchine code at once, and  written to a binary  file that can be executed by the computer

// Interpretation:- Interpretor runs through the source code and executes it line by line

// Modern JavaScript Engine now uses the mix b/w Interpretion and compilation which is called the Just-in-time(JIT) compilation

// JIT compilation:- Entire code is converted at machine code at once and then executed immediately

// How code executed by JavaScript Engine?

// When a piece of code is enterd the engine the first step is to parse the code means read the code during the parsing process the code is parsed into a data-structure caleed AST or Abstract Syntax tree. it works by first splitting the each line of code into pieces which is meaningful to the language like const and functions and then stored these pieces into a tree in a structured way this steps also checks if there is any syntax error and the resulting tree will letter be used to generate the machine code.

// Next step is the compilation which takes the generated AST and compiles it into a machine code, this machine code is executed right away(execution happens in call stack)

// Modern JS engine has some optimaization techniques

// what is does is at the biginning JS engine generates a very un-optimized version of the machine code at the start just so that it can start executing as soon as possible then in the background this un-optimized version of code is being re-optimzed and compiled during the already running program execution and this can happen many times and after each optimization least-optimized code is swapped by the more optimized version of the code without stopping execution ofcourse and this is the process which makes the modern v8 engine so fast

// All this parsing,compiltion and optimization happens in some special threads inside the engine that we cannot access from our code so completely seprated from the main thread which executing our own code

// JavaScript Run-time in the browser

// we can imgine js run-time as a big-box or container which includes all the things which we need to run JavaScript(in this case in the broweser).

// And the heart of any JS run-time is the JavaScript engine(call stack + heap) and without the engine there is no Javascript runtime however the engine alone is not enough in order to work properly we also need web-APIs(DOM,Timers,Fetch API). web apis are the functionalities provided to the engine but which are only accessible by the window object but not the part of the language itself. JS simply get access to these APIs using the global window object

// JS Engine also includes a Call-back queue(this is a data-structure which cantains all the call-back functions that are ready to be executed)eg:- callback functions from the DOM event listener, so as the event happens the callback function will be called so behind the scenes so first thing after the event(eg- click event) the callback function is put into the callback queue then when the callstack is empty the callback function is passed into the stack so that it can be excuted and this happens by the event-loop

// Execution Context and the call stack

// How Machine code after compilation is executed in the call-stack

// let's suppose our code is just compiled and ready for the execution so what happens first is the creation of globl execution context(for top level code outside of the function)

//  so at the beiginning the code which is outside the function is only executed

// Execution Context is an environment in which piece of
// JavaScript is executed. stores all the necessary information
// for some code to be executed

// Every big or small application code execution has only
// one global exexution context(default context), created for code that is not inside an function(top-leverl)

// now we have the environment where top level code can be executed execution of top-level-code(inside global EC) is being executed

// after the global EC is executed, execution of functions happens and waiting for callback functions

// and here how it works for every function a execution context(EC) per function is creaated which stores all the necessary information for the function execution and same goes for the methods as well becz they are also the functions

// All these Execution Context together makes up the Call Stack

// so after all these functions are done executing the engine will keep waiting for the callback functions so that it arrive so that it can be executed

// What's Inside Execution Context?

// EC consist of variable environment,Scope Chain and this keyword
// vriable environment has all(let,const and var declarations), function declarations and the arguments Object

// Scope chain has all the refrences of the variables and for to get hold of this scope chain this is inside the EC.

// These all inside EC generated during creation phase right before execution

// *** EC belonging to the Arrow functions does not get their own arguments keyword and this keyword

// so arrow functions don't get their own arguments object and this keyword instead they can use the arguments object and this keyword from their closest regular function parents

// Call Stack:- is a place where execution contexts get stacked
// on top of each other, to keep track of where we are in the execution

// Scope and the Scope-Chain

// Scoping:- How our program's variables are organized and accessed. "Where do varibles live? or where we can access a certain variable or not "

// Lexical Scoping:- Scoping is controlled by the placement of functions and the block of code

// Variable Scoping:- Space or Environment in which a certain variable is declared(variable env. in case of functions.) There is global scope,function scope and the block scope

// Scope of a variable:- Reigion of the code where a certain variable can be accessed

// 3 Types of Scope:-

// Global Scope:- Outside of any function or block
// Variables declared in global scope are accessible everywhere

// function Scope:- variables are only accessible inside the functions,not outside
// This is also called the local scope

// Block Scope(ES6):-
// 1. variables are only accessible inside block(block Scoped)
// 2. Howerer this only happens to the variables declared with the let and const
// functions are also block scoped only in strict mode

// The Scope Chain

const myName = 'Arpit';

function first() {
  const age = 30;

  if (age > 30) {
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = 'teacher';
    console.log(`${myName} is a ${age} years old ${job}.`);
  }

  second();
}

first();

// Every child scope has access to it's parent scope
// this also applies to the function arguments
// this how the scope chain works so if a variable can't be found in current scope then it will be lookup in it's parent scope and so on and if the varible is not found then there will be an error

// this process is called the variable lookup
// this is not the vice versa means prent has not acesss to the child scope

// Starting with ES6 not only functions, block also creates the scope(only for let and const variables)

// variables declared with var has the function scope

// scope-chain always works upward

// Scope-chain vs call-stack

const a = 'jonas';

first();

function first() {
  const b = 'hello';
  second();

  function second() {
    const c = 'Hii!!';
    third();
  }
}

function third() {
  const d = 'Hey';
  // console.log(d + c + b + a);
  // Refrence error
}

// Sccope-Chain has nothing to do with order in which functions are called

// Scoping in Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName},You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // add(2, 10);
      // Creating new vriable with same name as parent sscope's vriable
      const firstName = 'Steven';
      // Re-assigning outer scope's variable
      output = 'New Output';
      const str = `Oh, you are and millneial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        console.log('Total: ', a + b);
      }
    }
    // add(2, 10);
    console.log(millenial);
    console.log(output);
  }
  printAge();
  // console.log(millenial);// refrencce error

  return age;
}

const firstName = 'Arpit';
calcAge(1991);

/*   *********************************** */

//  Variable Environment and Hoisting

/*   *********************************** */

console.log(`**********************************`);
console.log('Variable Environment and Hoisting Strts Here!!');

// How variables re created in JS?

// Hoisting:- Makes some types of variables accessible/usable in the code before they are declared."Variables lifted to the top of their scope"

// what happens behind the scenes?
// Before execution, code is scanned for variable declartions, and for each variable,a new property is created in the variable environment object.

// Temporal Dead Zone,let and const

const newName = 'Jonas';

// if (newName === 'Jonas') {
//   console.log(`Jonas is a ${job}`);
//   const age = 2037 - 1999;
//   console.log(age);
//   const job = 'teacher';
//   console.log(x);
// }

// TDZ in Practice

// Hoisting with vriables
console.log(me);
// console.log(job);
// console.log(newBirthYear);

var me = 'Arpit';
let job = 'teacher';
const newBirthYear = 1999;

// Hoisting with functions
console.log(addDecl(3, 5));
// console.log(addExpr(2, 3));
// console.log(addExpr);
// console.log(addArrow(3, 5));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// *********** Example
console.log('Hoisting Example');

if (!products) {
  deleteShoppingCart();
}
var products = 10;

function deleteShoppingCart() {
  console.log(`All Products deleted!!`);
}

// variables declared with var can be accessed by the global window object not with let and const declarations

var x = 1;
let y = 2;
const z = 35;

console.log(x === window.x);

console.log(y === window.y); // false
console.log(z === window.z); // false

// This keyword in JavaScript

console.log(`**************************`);
console.log(`This Keyword in JavaScript!!`);

// this keyword/variable:- Special variable that is created for every execution context(every function).

// Takes the value of(points to) the "owner" of the function in which the this keyword is used

// this is not static, it depends on how the function is called, and it's value is only assigned when the function is actually called

// different function for this keyword

// Method -> this = < Object that is calling the method>

// Simple function calling -> this = undefined(only in case of strict mode otherwise poinst to the global window object)

// Arrow function -> this = (this keyword of the surrounding function(lexical this) or the parent function)

// event listeners -> this = (DOM element that the handler function is attached to)

// this does not points to the function itself, and also Not to the it's variable environment.

// this keyword in Practice

// console.log(this);

// const jonasAge = function (birthYear) {
// console.log(2037 - birthYear);
// console.log(this);
// };

// jonasAge(1991);

// const jonasAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// jonasAgeArrow(1999);

// const jonas = {
//   birthYear: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.birthYear);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   birthYear: 2017,
// };

// this is called method-borrowing
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// this keyword always points to the object which calling the method
// this keyword is dynamic

// const f = jonas.calcAge();
// f(); regular function call

/* ********************************* */

//    Regular functions vs Arrow Functions

/* ********************************* */
console.log(`*******************************`);
console.log(`*******************************`);

console.log('Rgular Functions vs Arrow Functions!!');

console.log(`*******************************`);
console.log(`*******************************`);
console.log(``);
console.log(``);

// var firstName = 'Matilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
    // Solution: 1
    // const self = this; // preserve this keyword
    // // console.log(self);
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();
    // Solution: 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet(); // points to the global window object
jonas.calcAge();

// Arguments Keyword

// const addExprFunc = function (a, b) {
//   console.log(arguments);
//   console.log(a + b);
// };
// addExprFunc(2, 5);
// addExprFunc(2, 5, 8, 13);

// Arrow function does not get this keyword
// const addArrFunc = (a, b) => {
//   // console.log(arguments);throws an error
//   return a + b;
// };
// console.log(addArrFunc(7, 8));

/* ********************************* */
console.log(`*******************************`);
console.log(`*******************************`);

console.log('Primitives vs Objects');

console.log(`*******************************`);
console.log(`*******************************`);
console.log(``);
console.log(``);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const mySelf = {
  name: 'Arpit',
  age: 30,
};
const friend = mySelf;
friend.age = 27;
console.log(`me: ${mySelf.age}`);
console.log(`Friend: ${friend.age}`);

// Primitives types are stored in call-stack
// Objects/Refrence types are stored in the memory heap

// How primitive types are stored into the call-stack
let name = 'Arpit';
let newFirstName = name;
name = 'Rajesh';
// so what happen is that first JS will create a unique Identifier with a memory name then a piece of memory address is allocated with the certain address i.e->(eg: 0001) and the value will be stored at the specified memory address so the value 'Arpit' will be specified at the memory address 0001 and this all happens at the call-stack and important to remember that identifier holds the memory address which points to the value not the value itself so we will say that identifier name stores the memory address 001 which holds the value 0001

// in the next line newFirstName = name a new identifier is creted with the name newFirstName which points to the same address so holds the same value

// In final line name = 'Rajesh' so what happens is that a new piece of memory is created or allocated so the name variable points to the newly allocated address(i.e 0002) and hods the value 'Rajesh' so thats how primitives are stored in the call stack

// How Refrence types are Stored into the Heap ?

// Things works differently for the Refrence types.
// so what happen is when a new object is created it is stored in the heap and such as before there is a memory address and the value itself now in the case of these refrence types like this mySelf object, mySelf Identifier not points directly to this memory address in the heap like in this example i.e D30F
// instead it will points to a new piece of a memory(i.e 0003) which is created in the stack so this new piece of memory will then point to the object that's in the heap by using the memory address as it's value

// In other words the piece of memory in the callStack
// has a refrence to the piece of memory in the heap which holds the mySelf Object.
// that's why objects are called the refrence types.
// objects are stored this way in heap because objects can be too big stored in the stack. that's why objects are stored in the heap which is like an unlimited memory pool.

let object1 = {
  name: 'Arpit',
  age: 23,
  graduation: 'Engineering',
  married: false,
};

let object2 = object1;
object1.name = 'Priyanshu';
console.log(`Object1 : `, object1);
console.log(`Object2 : `, object2);
object1 = {
  name: 'Avinash',
  age: 24,
  graduation: 'Commerce',
  married: true,
};

// console.log(`Object1 : `, object1);
// console.log(`Object2 : `, object2);

/* ********************************* */
console.log(`*******************************`);
console.log(`*******************************`);

console.log('Primitives vs Objects in Practice');

console.log(`*******************************`);
console.log(`*******************************`);
console.log(``);
console.log(``);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage: ', jessica);
console.log('After Marriage: ', marriedJessica);

// Copying Objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // what it will do is that it will combine/merge two Objects and return a new Object.

jessicaCopy.lastName = 'Swift';
console.log(jessica2);
console.log(jessicaCopy);

// but this method only does the shallow coping/clone means to the first level not for the Inner level so what we require a deep coping/cloning.

jessicaCopy.family.push('Marry');
jessicaCopy.family.push('John');
console.log(jessica2);
console.log(jessicaCopy);

// deep cloning will be required
