// this print only 1400 nothing different
const score = 1400
// console.log(score);

// but print also 1400 but in different way because we use (new number) 
// output => [number : 1400]
const balance = new Number(1400)
// console.log(balance);

// it converts  into string 
// console.log(balance.toString());

// if i want to check length of string after converting number into string then
// console.log(balance.toString().length);

// if i want to fix the number after 2 decimal digit then i use
// console.log(balance.toFixed(3));

// preicision keyword is used to round off the value as per your choice

const money = 345.786
// console.log(money.toPrecision(5));

// tolocalstring keyword is used to read number in readable format 
// ex if number is 100000
// output => 1,00,000
// if you want to convert in indin style use 'en-IN'

const paisa = 237313531
// console.log(paisa.toLocaleString('en-IN'));


// ---------------------------------------MATH-------------------------------------------

// it convert negative into positve only
console.log(Math.abs(-5));
// it round off the integer
console.log(Math.round(9.8));
// ceil means think like house where we place ceil on the top means whatever you give like 6.1 it always give 7
console.log(Math.ceil(4.1));
// ceil means think like house where we place floor on the bottom means whatever you give like 6.8 it always give 6
console.log(Math.floor(6.7));
// it gives minimum value from the given set
console.log(Math.min(34,67,8,9,3,0,-2));
// it give maximum value from the set
console.log(Math.max(34,56,7888,966,40));
// random keyword is used to got random output
console.log(Math.random());

// it always gives greater than 10 and less then 20 value by using floor and max-min+1 and finally add min
const min = 10
const max = 20
console.log(Math.floor(Math.random()* ( max- min + 1) + min));






