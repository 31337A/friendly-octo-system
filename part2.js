const distance = 1500;
const mh55 = 55;
const mh60 = 60;
const mh75 = 75;
const speed55 = 30;
const speed60 = 28;
const speed75 = 23;
const budget = 175;
const average = 3;

// 1.How many gallons of fuel will you need for the entire trip?
let calc55 = distance / speed55;
console.log("You need " + Math.round(calc55) + " Gallons if your speed 55 speed Mph");

let calc60 = distance / speed60;
console.log("You need " + Math.round(calc60) + " Gallons if your speed 60 speed Mph");

let calc75 = distance / speed75;
console.log("You need " + Math.round(calc75) + " Gallons if your speed 75 speed Mph");

// 2. Will your budget be enough to cover the fuel expense?
let summBudget1 = (average * calc55) <= budget;
console.log("If you drive 55 Mph, your budget: " + (summBudget1));

let summBudget2 = (average * calc60) <= budget;
console.log("If you drive 60 Mph, your budget: " + (summBudget2));

let summBudget3 = (average * calc75) <= budget;
console.log("If you drive 75 Mph, your budget: " + (summBudget3));

// 3.How long will the trip take, in hours?
let hours1 = distance / mh55
console.log("If you drive 55 Mph it takes " + Math.round(hours1) + " hours")

let hours2 = distance / mh60
console.log("If you drive 65 Mph it takes " + Math.round(hours2) + " hours")

let hours3 = distance / mh75
console.log("If you drive 70 Mph it takes " + Math.round(hours3) + " hours")































// const distance = 1500;
// let budget = 175;
// let average = 3;

// //55 miles per hour - 30 miles per gallon
// //1.How many gallons of fuel will you need for the entire trip?
// let sumofGallons30 = 1500 * ( 1 / 30 );
// console.log(sumofGallons30);

// //60 miles per hour - 28 miles per gallon
// let sumofGallons28 = 1500 * ( 1 / 28 );
// console.log(sumofGallons28);

// //75 miles per hour - 23 miles per gallon
// let sumofGallons23 = 1500 * ( 1 / 23 );
// console.log(sumofGallons23);

// //2.Will your budget be enough to cover the fuel expense?
// let ifEnough = sumofGallons30 * 3 <= budget;
// console.log(ifEnough) 

// //3.How long will the trip take, in hours?

