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

// we can imgine js engine as a big-box or container which includes all the things which we need to run JavaScript(in this case in the broweser).

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
