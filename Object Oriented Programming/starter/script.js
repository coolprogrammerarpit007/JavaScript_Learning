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

// const Person = function (firstName, birthYear) {
//   // Instance Properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // Never write like this
//   // this.calcAge = function () {
//   //   console.log(2022 - this.birthYear);
//   // };
// };

// const person1 = new Person(`Arpit`, 1999);
// const matilda = new Person(`Matilda`, 1984);
// const jack = new Person(`Jack`, 1988);
// console.log(person1, matilda, jack);
// console.log(person1 instanceof Person);
// person1.calcAge();

// This new keyword does 4 things behind the scenes

// 1.new {} is created
// 2. constructor function is called and this keyword points to the newly created object.
// 3. {} linked to the prototype
// 4. function automatically return {}

// Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// // Implementing the Static Methods
// Person.hey = function () {
//   console.log(`Hey There 😁`);
//   // console.log(this);
// };

// Person.hey();
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
// Person.prototype.species = `Homo Sapiens`;
// // console.log(person1.species, matilda.species);
// // console.log(Person.prototype.constructor);
// const arr = [3, 6, 9, 8, 7, 4, 5, 6, 1, 2, 3, 3, 3, 3];
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype);
// // console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

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

// ES6 Classes
// class PersonCl {
//   constructor(fullName, birthYear) {
//     // Attributes
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance Methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Good Morning: ${this.fullName}`);
//   }

//   // getters and the setters

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // setting a property that already Exists.

//   set fullName(name) {
//     if (name.includes(` `)) {
//       this._fullName = name;
//     } else {
//       alert(`Input Name is not Valid!!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // static Methods
//   static hey() {
//     console.log(`Hiii There!! 😍`);
//   }
// }

// const person2 = new PersonCl(`Jessica Davis`, 1995);
// // console.log(person2);
// // person2.calcAge(); age will returned
// // console.log(person2.age);// returns age
// // console.log(person2.__proto__ === PersonCl.prototype); // returns true

// // console.log(person2._fullName);
// person2._fullName = `Arpit Mishra`;
// console.log(person2.fullName);
// console.log(person2._fullName);
// PersonCl.hey();

// PersonCl.prototype.greet = function () {
//   console.log(`Good Morning: ${this.firstName}`);
// };

// person2.greet();

// Important Points

// 1. Classes are not hoisted
// 2. Classes are first class citizens
// 3. classes body are executed in the strict mode

// Settrs and Getters

// Every object in JavaScript can have setters and the getters property andd we call these special properties the assessor properties. while more norml properties are called the data-properties.

// so  getters and setters are the normal functions but on outside they look like properties for getting and setting the value.

// const account = {
//   owner: `Arpit`,
//   movements: [200, 300, -500, 7500, 2500],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     return this.movements.push(1911);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// Classes also Indeed have the getters and the setters

// Object.create()
console.log(`********************************`);
// console.log(`Object.create Methodd!!`);

// The Idea behind object.create() is same as the prototype Inheritence but there is no prototype properties,constructor function and new keyword

// we can use Object.create() to manually set the prototype of an Object to the prototype of we want.

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = `Steven`;
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);
// const Sarah = Object.create(PersonProto);
// Sarah.init(`Saarah`, 1981);
// Sarah.calcAge();

// Coding Challenge #2:-
console.log(`***************************`);
// console.log(`Coding Challenge #2`);

// class Car {
//   // Constructor Methods
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   // Instnance Methods

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} accelerated and now runs at: ${this.speed}`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} deaccelerated and now runs at: ${this.speed}`);
//   }

//   // getters and setters

//   get speedUS() {
//     return `For Americans speed will be: ${this.speed / 1.6} MP/hrs`;
//   }

//   // Setting Speed in MP/Hrs
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }

//   get speedUS() {
//     return `For Americans speed will be: ${this.speed / 1.6} MP/hrs`;
//   }
// }

// const car1 = new Car(`Ferrri`, 120);
// car1.accelerate();
// car1.brake();

// // console.log(car1.speedUS);

// car1.speedUS = 90;
// console.log(car1.speedUS);

// const car2 = new Car(`Lamborginni`, 160);
// car2.accelerate();
// car2.brake();

// car2.speedUS = 160;
// console.log(car2.speedUS);

console.log(`******************************`);

// Inheritence between Classes

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   return 2023 - this.birthYear;
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking Prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduction = function () {
//   return `Hi, my name is ${this.firstName} and I am a student of ${this.course}`;
// };

// const student1 = new Student(`Mike`, 2000, `Computer Science`);
// console.log(student1.calcAge());
// console.log(student1.introduction());

// console.log(student1.__proto__);
// console.log(student1.__proto__.__proto__);
// console.log(student1.__proto__.__proto__.__proto__);
// console.log(student1 instanceof Student);
// console.log(student1 instanceof Person);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// Coding Challenge #3:-
// console.log(`**************************`);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.acceleration = function () {
//   this.speed = this.speed + 10;
//   return `${this.make} accelerated to: ${this.speed}`;
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   return `${this.make} accelerated to: ${this.speed}`;
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   return this.charge;
// };

// EV.prototype.acceleration = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed} km/hrs,with a charge of ${Math.floor(
//       this.charge
//     )}`
//   );
// };

// const tesla = new EV(`Tesla`, 120, 23);

// // console.log(tesla.acceleration());
// // console.log(tesla.acceleration());
// console.log(tesla.brake());
// console.log(tesla.charge);
// console.log(tesla.chargeBattery(65));
// tesla.acceleration();
// console.log(tesla instanceof EV);
// console.log(tesla instanceof Car);

// Settng the Charge

// Inheritence b/w ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods

  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey: ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(` `)) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!!`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log(`Hey ${this.fullName}`);
  }
}

// Inheriting from the parent class
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Happens first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `My name is ${this.fullName} and I am Student of ${this.course}`
    );
  }

  calcAge() {
    console.log(`I am gonna energetic in 10 years!`);
  }
}

const student1 = new StudentCl(`Arpit Mishra`, 1999, `Computer Science`);
const student2 = new StudentCl(`Rajesh Sharma`, 1999, `Chemistry`);
// console.log(student1);
// student1.introduce();
// console.log(student1.__proto__);
// student1.calcAge();
// student2.introduce();

// Another Class Example

// class Account {
//   constructor(owner, currency, pin) {
//     // Attributes
//     this.owner = owner;
//     this.currency = currency;

//     // we can also enter properties here not based on input;

//     // Protected Property
//     this._pin = pin;
//     this._movements = [];
//     this._local = navigator.language;
//   }

//   // Intance methods
//   // Public Interface

//   getMovements() {
//     return this._movements;
//   }
//   deposit(mov) {
//     this._movements.push(mov);
//   }

//   withdrawl(mov) {
//     this.deposit(-mov);
//   }

//   // Protected Method
//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//     } else {
//       alert(`Sorry, your loan application is rejected!!`);
//     }
//   }
// }

// const acc1 = new Account(`Jonas`, `EUR`, 7895);
// acc1.movements.push(750);
// acc1.movements.push(750);
// acc1.movements.push(-150);
// acc1.deposit(750);
// acc1.deposit(1200);
// acc1.deposit(38952);
// acc1.withdrawl(150);
// acc1.requestLoan(9500);

// console.log(acc1);
// console.log(acc1.getMovements());

// Encapsulation: Protected Properties and Methods

// Implementing Tesla

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} accelerated to: ${this.speed}`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} deaccelerated to: ${this.speed}`);
//   }
// }

// class EV extends Car {
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.charge = charge;
//   }

//   chargeBattery(chargeTo) {
//     this.charge = chargeTo;
//     console.log(`charge: ${this.charge}`);
//   }

//   accelerate() {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(
//       `${this.make} going at ${this.speed},with a charge of: ${this.charge}%`
//     );
//   }
// }

// // EV.prototype.constructor = EV;
// const tesla = new EV(`Tesla`, 120, 23);
// // console.log(tesla);
// // tesla.accelerate();
// // tesla.accelerate();
// // tesla.brake();
// // tesla.accelerate();
// // tesla.chargeBattery(95);

// Encapsulation: Private Class fields and Methods

// In traditional programming languages the properties are called fields

// There are 4 fields&methods
// 1. public field
// 2. private field
// 3.public method
// 4. private method
// There are also 4 static versions

class Account {
  // Public fields (instances)
  _local = navigator.language;

  // Prvate fields (instances)
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    // Attributes
    this.owner = owner;
    this.currency = currency;

    // we can also enter properties here not based on input;

    // Protected Property
    this.#pin = pin;
    // this._movements = [];
    // this._local = navigator.language;
  }

  // Intance methods
  // Public Interface

  // Public Methods

  getMovements() {
    return this.#movements;
  }
  deposit(mov) {
    this.#movements.push(mov);
    return this;
  }

  withdrawl(mov) {
    this.deposit(-mov);
    return this;
  }

  // Protected Method

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      return this;
    } else {
      alert(`Sorry, your loan application is rejected!!`);
    }
  }

  // Private Methods
  // #approveLoan(val)
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account(`Jonas`, `EUR`, 7895);
acc1.deposit(756);
acc1.requestLoan(950);
acc1.requestLoan(1950);
acc1.requestLoan(12500);
// console.log(acc1);
// we can see now that this movements property is a private field now.

// could not acess the private fields
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.getMovements());

// Private method won't access
// console.log(acc1.#approveLoan(150));

// Chaining Methods
acc1
  .deposit(300)
  .deposit(700)
  .withdrawl(150)
  .requestLoan(25000)
  .deposit(900)
  .withdrawl(150)
  .deposit(23569);

// console.log(acc1.getMovements());

// Coding Challenge #4:-

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} accelerated at: ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} deaccelerated to: ${this.speed}`);
  }
}

class EVCl extends CarCl {
  // Private access
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} runs at ${this.speed}km/hrs with charge: ${this.#charge}`
    );
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(this.#charge);
  }

  brake() {
    this.speed -= 10;
    this.#charge += 1;
    console.log(
      `${this.make} runs at ${this.speed}km/hrs with charge: ${this.#charge}`
    );
  }
}

const car3 = new EVCl(`Rivian`, 120, 23);
console.log(car3);
car3.accelerate();
car3.accelerate();
car3.brake();
car3.chargeBattery(95);
// car3.#charge;
