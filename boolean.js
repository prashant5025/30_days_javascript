// console.log(3 >= 2); //true
// console.log(3 > 3); // false
// console.log(3 >= 3);
// console.log(3<= 2);
// console.log(3 <= 3);

// console.log(3 !== "3");

// console.log("monogo".length !=="jargon".length); // true
const check = 4 > 3 && 10 < 12; // true
const check1 = 4 < 3 && 10 > 12; // false
const check2 = 4 > 3 || 10 > 12; //true
const check3 = 4 > 3 && 10 > 12; //false

// console.log(check3); // false

const check4 = !(4 > 3) // false
// console.log(check4)

// ** Tanary Operators ** 
let isCold = true;
// isCold = !isCold;

isCold ? console.log("You need to wear sweater.") : console.log("No need to wear sweater today.");



let number = 10;

number > 0 ? console.log(`${number} is a positive number.`) : console.log(`${number} is a negative number.`);

number = -5;
number > 0 ? console.log(`${number} is a positive number.`) : console.log(`${number} is a negative number.`);


let now = new Date()
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getTime());

const allSeconds = Date.now()
const timeInSec = new Date().getTime()

console.log(allSeconds == timeInSec);


now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)
const second = now.getSeconds() // return number (0 - 59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 20/10/2022 18:45

const data = {
    // name: "prashant",
    lastName: "singh",
    country: "India",
    city: "Hapur",
    age: 25,
    hobbies: ["coding", "reading", "writing"],
    isMarried: false
}

const myJsonString = JSON.stringify(data)

// console.log(myJsonString);
// console.log(data)

console.log('10' ==10);


console.log(parseInt('9.8') == 10);

let value1 = 4 > 5;
let value2 = 4 > 5 || 5 > 4
let value3 = 6 > 5 && 5 > 4


console.log(value1, value2, value3);

console.log(("python").length == ("jargon").length);


value1 = 4 > 3 && 10 < 12;
value2 = 4 > 3 && 10 > 12;
value3 = 4 > 3 || 10 < 12
let value4 = 4 > 3 || 10 > 12
let value5 = !(4 > 3)
let value6 = !(4 < 3)
let value7 = !(false)
let value8 = !(4 > 3 && 10 < 12)
let value9 = !(4 > 3 && 10 > 12)
let value10 = !(4 === '4')

console.log(value1,value2, value3, value4, value5, value6, value6, value7, value8, value9,value10);



console.log(`${date}/${month}/${year} ${hours}:${minutes}:${second}`);

console.log(Date.now())

let name = "prashant";

name > 7 ? console.log(`${name} is short name.`) : console.log(`${name} is long name.`);

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

firstName.length > lastName.length ? console.log(`${firstName} is longer than ${lastName}`) : console.log(`${lastName} is longer than ${firstName}`)