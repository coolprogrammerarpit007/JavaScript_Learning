// Code File Contains all the the code of challenges in this section come along with it.

// Chalenge 1:-

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

let markWeight = 78;
let markHeight = 1.69;
// markWeight = 95;
// markHeight = 1.88;

let johnWeight = 92;
let johnHeight = 1.95;
// johnWeight = 85;
// johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
// console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
// console.log("Mark has higher BMI than John: ", markHigherBMI);

// Challenge #2:-

let higherBmiDetails;

if (markHigherBMI) {
  higherBmiDetails = `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`;
} else {
  higherBmiDetails = `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI}) `;
}

// console.log(higherBmiDetails);

// Challenge #3:-

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;
// dolphinsScore1 = 97;
// dolphinsScore2 = 112;
// dolphinsScore3 = 101;
// dolphinsScore1 = 97;
// dolphinsScore2 = 112;
// dolphinsScore3 = 101;

let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;
// koalasScore1 = 109;
// koalasScore2 = 95;
// koalasScore3 = 123;
// koalasScore1 = 109;
// koalasScore2 = 95;
// koalasScore3 = 106;

const dolphinsAvgScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAvgScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// console.log(dolphinsAvgScore, koalasAvgScore);

// if (dolphinsAvgScore >= 100 && dolphinsAvgScore > koalasAvgScore) {
//   console.log(
//     `Dolphins win the Championships with a score of ${dolphinsAvgScore} vs ${koalasAvgScore}`
//   );
// } else if (koalasAvgScore >= 100 && koalasAvgScore > dolphinsAvgScore) {
//   console.log(
//     `Koalas win the Championships with a score of ${koalasAvgScore} vs ${dolphinsAvgScore}`
//   );
// } else if (
//   dolphinsAvgScore >= 100 &&
//   koalasAvgScore >= 100 &&
//   dolphinsAvgScore === koalasAvgScore
// ) {
//   console.log(
//     `We have a draw this year with a score of:${dolphinsAvgScore} vs ${koalasAvgScore}. Both dolphins and koalas won the Championships this year. `
//   );
// } else {
//   console.log(`No One win this year!!`);
// }

// Coding Challenge #4:-
// Test data:
// § Data 1: Test for bill values 275, 40 and 430

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

// const bill = Number(prompt("Your bill is: "));

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value Is: ${
//     tip + bill
//   }`
// );
