'use strict';

// Data needed for a later exercise

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// IN ,ES6 WE CAN COMPUTE VALUES
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // With ES6, we don't have to write function expressions to write methods in object. we can just write this and it will work the same
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
  // before ES6 to inclulde opening hours object in the restaurant object we have to write like this:

  // openingHours: openingHours,
  // with ES6, we can write this(Enhanced Object literals) and it will work the same as above
  openingHours,

  orderDelivary: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address = 'XXX',
  }) {
    console.log(
      `Order Received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} on ${address}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* ************************* */

// OPTIONAL CHAINNG
// optional chaining is used to check if a given property exist or not in object so that's why ES6 Introduces Optional chaining which returns undefined if certain property don't exist.
//without optioonal chaining to check if property exist or not
// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }
// Now with optional chaning to do the same
// console.log(restaurant.openingHours.mon?.open); // will returns undefined

// Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Using Nullish-Coalesing operator and optionl chaining together
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Not Opened Today!!';
//   console.log(`On day: ${day} we open at: ${open}`);
// }
// optional chainng also works on methods we can check if a certain method exist or not

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// optional chaining even works on arrays
// const users = [
//   {
//     name: 'Arpit',
//     email: 'hello@gmail.com',
//   },
// ];

// console.log(users[0]?.name ?? 'User does not exist!!');
/* ************************* */

/*  **********************  */

/* ************************* */

// Looping Objects_Object keys and values and Object.entries()

// console.log(`looping over object keys: `);
// const properties = Object.keys(openingHours);
// console.log(properties);
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// console.log(`looping over object Values: `);

// for (const values of Object.values(openingHours)) {
//   console.log(values);
// }

// Entries Object
// const entries = Object.entries(openingHours);
// console.log(entries);
// console.log('looping over Object Key-Value Pair: ');
// for (const entry of entries) {
//   console.log(entry);
// }

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at: ${close}.`);
// }

/* *************************** */

//  looping Array: for of loop

/* ************************* */
// console.log(restaurant);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(`Menu Items: ${menu}`);

// using for of loop
// in for of loop you can also use the break and continue statement
// for (let item of menu) {
//   console.log(`Item: ${item}`);
// }
// // to get the index of array using for-of loop
// for (let [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// console.log([...menu.entries()]);
/*  **********************  */

// Enhanced Object Literals
// ES6 Introduced ways to write the object literals

// 1) Destructuring

//  Rest Operator

/* ************************* */

// Rest operator looks like spread operator but does the oposite

// spread operator is used to expand an array into the indiviusals elemets while the rest operator is used to collect individual elements and collect them into a single array
// spread is used on the right side of the = operator while the rest operator is used on the left side

// const [num1, num2, ...numArr] = [1, 2, 3, 4, 5];
// console.log(num1);
// console.log(num2);
// console.log(numArr);

// const [Pizza, , Risotto, ...menu] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(menu);
// console.log(Pizza);
// console.log(Risotto);

// Object Rest operator

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekDays);

// 2) Functions
// const number = function (...numbers) {
//   console.log(numbers);
// };
// number(2, 3);
// number(5, 3, 7, 2);

// const x = [23, 7, 12];
// number(...x);

// restaurant.orderPizza('musrooms', 'onion', 'spinach', 'garlic', 'tomato');
// restaurant.orderPizza('Cheese');
// Spread Operator
// const ingredents = [
//   prompt(`Ingredient1: `),
//   prompt(`Ingredient2: `),
//   prompt(`Ingredient3: `),
// ];
// restaurant.orderPasta(...ingredents);

// Spread operator with objects

// const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Arpit&Sons' };
// console.log(newRestaurant);
// /* *********************************** */

// //  Spread Operator

// /* ************************************ */
// // console.log(``);
// console.log(``);
// // Spread Operator: Expnding an Array
// // ... stands for spread operator
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Masroom Pizza'];
// console.log(newMenu);

// difference b/w spread operator and destructuring is that the spread operator does not create new variables instead just seprate individual values using comma

// copy array(shallow copy)

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// join 2 arrays

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// spread operator works on all Iterables(array,string,map,set but not object)

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// Multiple values seprated by the comma are only accepted when passed as arguments to the function or built a new array

/* *********************************** */

//  Destructuring Objects

/* ************************************ */
// restaurant.orderDelivary({
//   time: '22:30',
//   address: 'Gayatri Nagar Sodala',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// console.log(``);
// console.log(``);

// Destructuring the objects
// const { name, openingHours, categories } = restaurant;
// console.log(name);
// console.log(openingHours);
// console.log(categories);

// to name variables other than property name while destructuring the objects

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Setting default value to the property which don't eist while destructuring the objects.

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu);
// console.log(starter);

// Mutating variables from objects destructuring

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a);
// console.log(b);

// Nested Object destructuring
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/* *********************************** */

//  Destructuring Array

/* ************************************ */

// console.log(``);
// console.log(``);

// DESTRUCTURING TH ARRAYS
// destructuring is an ES6 feature which is used to unpack the array and object values
// to break a complex structure into small variables.

// const arr = [2, 3, 4];
// const [x, y, z] = arr; // destructuring arras

// console.log(x, y, z);

// original array is not affected

// let [main, , secondary] = restaurant.categories;
// console.log(`Main dish: `, main);
// console.log('Secondary dish: ', secondary);

// Swapping values using destructuring

// [main, secondary] = [secondary, main];
// console.log(`Main dish: `, main);
// console.log('Secondary dish: ', secondary);

// // Destructuring array return from function
// const [starterCourse, mainCourse] = restaurant.order(1, 2);

// console.log(`Starter: ${starterCourse}`);
// console.log(`Main: ${mainCourse}`);

// // destructuring the nested array

// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i);
// console.log(j);

// const [i, , [j, k]] = nested;
// console.log(i);
// console.log(j);
// console.log(k);

// // Default values

// const newArr = [8, 9];

// const [p = 1, q = 1, r = 1] = newArr;
// console.log(p);
// console.log(q);
// console.log(r);

/* ------------------------------------- */

// Short-Circuting using the OR Operator

/* ------------------------------------- */

// Short-Circuting(&&) and (||)operator

// with logical operators, you can use any data-type,return any data-type and short-circuiting it

// short-circuting in case of the or operator(||), it will immediately return the first value if it is an truthy value

// console.log(3 || 'Jonas'); // returns 3
// console.log('' || 'Jonas'); // returns 'Jonas'
// console.log(true || 0); // returns true
// console.log(undefined || null); // returns null
// console.log(null || undefined); // returns undefined
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // returns 'Hello'

// // restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// const guest2 = restaurant.numGuests || 10;

// console.log(guest1);
// console.log(guest2);

/* ------------------------------------- */

// Short-Circuting using the AND Operator

/* ------------------------------------- */

// Short-circuting works entirely opposite of the OR Operator

// console.log(0 && 'Jonas'); // returns 0
// console.log(7 && 'Jonas'); // returns 'Jonas'
// console.log('Hello' && 23 && null && 'Jonas'); // returns null

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Musrooms', 'Spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('Musrooms', 'Spinach');

/* ************************** */

// Nullish Coalescing Operator(??)

/* ************************** */

// restaurant.numGuests = 0;

// const guest1 = restaurant.numGuests || 10;

// console.log(guest1);

// nullish coalescing operator works because it works with the Idea of nullish value not the falsey value
// nullish values are: null and undefined
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// Coding Challenge:-1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    const [player1, player2, player3, player4] = players;
    console.log(
      `${player1},${player2},${player3},${player4} scored ${players.length} goals together`
    );
  },
};

/* ********************************* */

// Coding Challenge: 2

// Task: 1
console.log(`Task 1`);
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

// Task: 2
console.log(`Task 2`);
let totalOddScore = 0;
for (let odd of Object.values(game.odds)) {
  // console.log(odd);
  totalOddScore += odd;
}

const numberOfOdds = Object.values(game.odds).length;
// console.log(numberOfOdds);
console.log(`Average Odd: ${totalOddScore / numberOfOdds}`);

// Task 3:-
console.log(`Task 3`);
const { team1, team2 } = game;
// console.log(team1);

for (const [result, odd] of Object.entries(game.odds)) {
  // console.log(result);
  if (result === 'team1') {
    console.log(`Odd of victory ${team1}: ${odd}`);
  } else if (result === 'team2') {
    console.log(`Odd of victory ${team2}: ${odd}`);
  } else {
    console.log(`Odd of draw: ${odd}`);
  }
}

// Bonus Challenge:
const scores = {};
for (let player of game.scored) {
  // console.log(player);
  scores[player] ? scores[player]++ : (scores[player] = 1);
}
console.log(scores);

// console.log(team1);
// console.log(team2);
/* ********************************* */

/* ********************************* */

// Coding Challenge:1

// // Task: 1
// const [player1, player2] = game.players;
// console.log(player1);
// console.log(player2);

// // Task:  2

// const [gk, ...fieldPlayers] = player1;
// console.log(gk);
// console.log(fieldPlayers);

// // Task: 3
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// // Task: 4
// // 'Thiago', 'Coutinho' and 'Perisic'

// const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(player1Final);

// // Task 5

// let { team1, x: draw, team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// // Task 6:-
// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.printGoals(...game.scored);

// // Task 7:-

// team1 < team2 && console.log('Team 1 is more likely to win!!');
// team1 > team2 && console.log('Team 2 is more likely to win!!');

/* ********************************* */
