// let num = -3;

// if (num > 3){
//     console.log(`${num} is greater than 3`)
// } else{
//     console.log(`${num} is less than 3`)
// }

let isRaining = false;

if (isRaining){
    console.log(`You need a rain coat. `);
}else{
    console.log(`No need for a rain coat.`);
}

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = 14;

if (age >= 18){
    console.log(`You are old enough to drive.`);
}else{
    console.log(`You are left with ${18 - age} years to drive.`)
}

let yourAge = 34;
let myAge = 22;

if  (yourAge > myAge){
    console.log(`You are ${yourAge - myAge} years older than me.`);

}else{
    console.log(`I am ${myAge - yourAge} years older than you.`)
}

let a = 4
let b = 3

if (a > b){
    console.log(`${a} is greater then ${b}`);
}else{
    console.log(`${b} is greater then ${a}`);
}

let number = 2;

if(number % 2 == 0){
    console.log(`${number} is an even number.`);
}else{
    console.log(`${number} is an odd number.`);
}

let score = 5;


if(score >= 80 && score <= 100){
    console.log("A");
}else if(score >= 70 && score <= 89){
    console.log("B")
}else if(score >= 60 && score <= 69){
    console.log("C");
}else if(score >= 50 && score <= 59){
    console.log("D")
}else if(score >= 0 && score <= 49){
    console.log("F")
}else{
    console.log("Invalid Input")
}

let dayUserInput = 'monday'
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = 'December';

switch (month) {
    case 'September':
    case 'October':
    case 'November':
        console.log('The season is Autumn');
        break;
    case 'December':
    case 'January':
    case 'February':
        console.log('The season is Winter');
        break;
    case 'March':
    case 'April':
    case 'May':
        console.log('The season is Spring');
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log('The season is Summer');
        break;
    default:
        console.log('Invalid Input');
}

month = 'March';
switch(month){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${month} has 31 days`);
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(`${month} has 30 days`);
        break;
    case 'February':
        console.log(`${month} has 28 days`);
        break;
    default:
        console.log('Invalid Input');
}