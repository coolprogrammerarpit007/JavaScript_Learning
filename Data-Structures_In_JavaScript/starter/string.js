'use strict';

// String Data type in JavaScript
console.log(`*************************`);
console.log(`*************************`);
console.log(`Strings in JavaScript`);

// Working with strings

const airline = 'Airindia';
const plane = 'A320';

// console.log(plane[0]);
// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('i'));
// console.log(airline.indexOf('india'));
// console.log(airline.slice(3)); // it return a substring becz strings are un-mutable.
// console.log(airline.slice(0, airline.lastIndexOf(`r`) + 1));
// console.log(airline.slice(airline.indexOf('r') + 1));
// console.log(airline.slice(-3, -1));

// const checkMiddleSeat = seat => {
//   // B and E are the middle seats
//   const seatRow = seat.slice(-1);
//   if (seatRow === 'B' || seatRow === 'E') {
//     console.log(`Your seat is middle one!!`);
//   } else {
//     console.log(`Your seat has an Window one!!`);
//   }
// };

// checkMiddleSeat(`11B`);
// checkMiddleSeat(`23C`);
// checkMiddleSeat(`3E`);

// whenever we call a method on a string,the string primitive will be converted to string object autoatically behind the scenes with same content by JavaScript. this process is called boxing

//  so what happen is

// console.log(new String('Arpit'));
// and when the opertion is done it connerted back to primitive

// fix capitaliztion in name

const passenger = 'ARpIt';
const passengerLower = passenger.toLowerCase();
const correctPassenger = passenger[0] + passengerLower.slice(1);
// console.log(correctPassenger);

// Comparing Emaail

// const passengerEmail = `hello@jonas.io`;
// const loginEmail = ` Hello@Jonas.Io \n`;
// const lowerLoginEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerLoginEmail.trim();
// console.log(trimmedEmail);

// console.log(passengerEmail === trimmedEmail);

// Replacing Strings

// const priceGb = `288,97€`;
// const priceUS = priceGb.replace(`€`, `$`).replace(',', '.');

// console.log(priceUS);

// const announcement = `All passengers come to boarding door 23. Boarding door 23!!`;
// console.log(announcement.replaceAll('door', 'gate'));

// const checkBaggage = items => {
//   const baggage = items.toLowerCase();
//   if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
//     console.log(`You are not allowed sir`);
//   } else {
//     console.log(`You can board-in`);
//   }
// };

// checkBaggage(`I have a laptop,some Food and a pocket knife`);
// checkBaggage(`Socks and camera`);
// checkBaggage(`Got some snacks and gun for protection`);

// Working with Strings

// split() and join()

// console.log(`a+very+nice+string`.split('+'));
// console.log(`Jonas Scmedtmann`.split(' '));

const [firstName, lastName] = `Arpit Mishra`.split(` `);
// console.log(firstName);
// console.log(lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(` `);
// // console.log(newName);

// // Capitaize each letter of name

// const capitalizeName = function (name) {
//   const newNameArr = [];
//   const names = name.split(` `);
//   names.forEach(name => {
//     name = name[0].toUpperCase() + name.slice(1);
//     newNameArr.push(name);
//   });
//   return newNameArr.join(` `);
// };

// console.log(capitalizeName('arpit mishra'));
// console.log(capitalizeName('rafael pierce don nadal'));

// Padding A String

// const message = `Go to gate 23`;
// console.log(message.padStart(25, `+`));
// console.log(`Arpit`.padStart(25, `+`));
// console.log(message.padEnd(25, `+`));

// const maskedCreditCard = number => {
//   const str = String(number);
//   const last = str.slice(-4);
//   // const length = str.slice(0, -4).length;
//   return last.padStart(str.length, `$`);
// };

// console.log(maskedCreditCard(4333785647589));
// console.log(maskedCreditCard(4333785667847589));

// Repeat Method

// const message2 = `Bad Weather....!! All departures are late.`;
// console.log(message2.repeat(5));

// const planesInLine = number => {
//   console.log(`There are ${number} of Planes in line!!`.repeat(number));
// };

// planesInLine(5);

// Coding Challenge #4:-

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector(`button`).addEventListener('click', e => {
  let textAreaInput = document.querySelector(`textarea`).value;
  const strArr = textAreaInput.split(`\n`);
  strArr.forEach((str, index) => {
    str = str.trim();
    let [first, second] = str.split(`_`);
    first = first[0].toLowerCase() + first.slice(1);
    second = second[0].toUpperCase() + second.slice(1);
    let newStr = [first, second].join(``);
    newStr = newStr + `😎`.repeat(index + 1);
    console.log(newStr);
  });
});
